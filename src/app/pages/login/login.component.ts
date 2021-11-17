import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {movidbAuthResponse, User} from '../../shared/models/interfaces';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public submitted: boolean = false;
  public message: string = '';
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Будь ласака, внесіть дані';
      }
    });
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
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
    this.auth.getPreviousToken().subscribe(
      (response: movidbAuthResponse) => {
        user.request_token = response.request_token;
        this.auth.setToken(response);
        this.auth.login(user)
          .pipe(takeUntil(this.destroy$))
          .subscribe( () => {
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

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
