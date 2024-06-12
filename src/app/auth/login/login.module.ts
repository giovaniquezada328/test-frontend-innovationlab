import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
