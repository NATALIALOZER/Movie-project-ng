import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {movidbAuthResponse, User} from '../../shared/models/interfaces';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public message: string = '';

  constructor( public auth: AuthService,
               private router: Router,
               private route: ActivatedRoute ) { }

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Будь ласака, внесіть дані';
      }
    });
    this.form = new FormGroup(
      {
        username: new FormControl(null, [Validators.required]),
        password: new FormControl( null, [Validators.required, Validators.minLength(6)])
      }
    );
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password
    };

    this.auth.getTokenFb(user).subscribe(
      (response: movidbAuthResponse) => {
        user.request_token = response.request_token;
        this.auth.setToken(response);
        this.auth.login(user).subscribe( () => {
          this.form.reset();
          this.router.navigate(['home']);
          this.submitted = false;
          this.auth.isAuthenticated();
        }, () => {
          this.submitted = false;

        });
      }
    );
  }
}
