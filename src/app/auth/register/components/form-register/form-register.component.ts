import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      file: [undefined],
      filetwo: [undefined],
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
    const dataForm = this.form.getRawValue();
    const dataApi = {
      calle: dataForm.street,
      numero_exterior: dataForm.numberOutside,
      numero_interior: dataForm.numberInside,
      colonia: dataForm.colony,
      cp: dataForm.zipCode,
      telefono_empresa: dataForm.phone,
      nombre_comercial: dataForm.name,
      csf: dataForm.file,
      identificacion_oficial: dataForm.filetwo
    }
    this.registerService.register(dataApi)
    .subscribe(
      {
        next: async (res: any) => {
         await this.openSnackBar(res.mensaje, 'Registro');
         this.router.navigateByUrl('/login');
       },
        error: err => {
          console.log(err);
        }
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 3000 });
  }


}
