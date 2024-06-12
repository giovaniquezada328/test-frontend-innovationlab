import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      file: ['', [Validators.required]],
      filetwo: ['', [Validators.required]],
      street: ['', [Validators.required]],
      numberOutside: ['', [Validators.required]],
      numberInside: ['', [Validators.required]],
      colony: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      terms: ['', [Validators.required]],
      promotions: ['', [Validators.required]],
    });
  }

  onRegister() {
    console.log(this.form.getRawValue());
  }


}
