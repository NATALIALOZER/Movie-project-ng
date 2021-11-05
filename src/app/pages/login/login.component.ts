import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/models/interfaces';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  constructor( private auth: AuthService,
               private router: Router ) { }

  public ngOnInit(): void {
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
    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password
    };
    this.auth.login(user);
      /*.subscribe((res: any) => {
        console.log(res)
      /!*this.form.reset();*!/
      /!*this.router.navigate(['home']);*!/
    });*/
    setTimeout(() => {
      this.form.reset();
      this.router.navigate(['home']);
    }, 500);
  }
}
