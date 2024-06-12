import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../../shared/shared.module';
import { FormRegisterComponent } from './components/form-register/form-register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
