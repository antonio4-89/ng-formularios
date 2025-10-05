import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches-page',
  standalone: false,
  templateUrl: './switches-page.html',
  styles: ``
})
export class SwitchesPage implements OnInit {

  person = {
    gender: 'M',
    wantNotifications: true
  }

  myForm!: FormGroup;
constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      gender: ['M', Validators.required],
      wantNotifications: [true, [Validators.required]],
      termsAndConditions: [false, [Validators.requiredTrue]]
    })

  }

  isValiedField(field: string): boolean | null{

    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;

  }

  getFieldError(field: string)
  {
      if(!this.myForm.controls[field]) return null;

  const errors = this.myForm.controls[field].errors || {}

  for (const key of Object.keys(errors)){
     switch(key){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracteres` 
      }
      console.log(key)
  }
return null;
  }



onSubmit(){
  if(this.myForm.invalid){
    this.myForm.markAllAsTouched();
    return;
  }

const { termsAndConditions, ...newPerson } = this.myForm.value; 

  this.myForm.reset( this.person );

  console.log(this.myForm.value)

  console.log('Quite Terminos con la desestructuracion')
  console.log(newPerson);

}

}
