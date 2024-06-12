import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { TopnavComponent } from './components/topnav/topnav.component';
@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TopnavComponent
  ]
})
export class SharedModule { }
