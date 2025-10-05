import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const RTX809 = {
  name: 'GRAFICA-7090',
  price: 522,
  inStorage: 22 
}

@Component({
  selector: 'app-basic-page',
  // template: `<p>basic-page works!</p>`,
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class BasicPageComponent implements OnInit{ 

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormGroup('', [], []),
  //   price: new FormGroup('', [], []),
  //   inStorage: new FormGroup('', [], [])
  // })

  public myForm!: FormGroup;
  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)], []],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]]
    })
  }

  isValiedField(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null{
    if( !this.myForm.controls[field] ) return null;

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
    return 'Hello word'
  }

  resetForm(){
    this.myForm.reset(RTX809);
  }


  sendForm(){
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return;
    } 

    this.myForm.reset()
    console.log('Hello form')

  }

}
