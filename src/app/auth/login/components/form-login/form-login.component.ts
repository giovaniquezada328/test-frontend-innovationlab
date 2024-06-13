import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form!: FormGroup;
  errorText!: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  onLogin() {
    console.log(this.form.getRawValue());

    const data = this.form.getRawValue();
    this.loginService.login(data)
    .subscribe(
      {
        next: async (res: any) => {
         console.log(res);
         if(res.token){
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('/layout');
         }

       },
        error: err => {
          console.log(err);
          console.log(err.error.non_field_errors[0]);
          this.errorText = err.error.non_field_errors[0];
        }
      });



  }

}
