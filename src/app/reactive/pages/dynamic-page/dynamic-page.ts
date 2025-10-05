import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  standalone: false,
  templateUrl: './dynamic-page.html',
  styles: ``
})
export class DynamicPage implements OnInit {

  myForm!: FormGroup;
  newFavoriteGame: FormControl = new FormControl('', [Validators.required]) 

constructor( private fb: FormBuilder )
{}
  ngOnInit(): void {
    this.formulario();
  }

formulario(){
  this.myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Slug', Validators.required],
      ['Street Fighter', Validators.required]
    ])
  })
}

get favoriteGames(){
  return this.myForm.get('favoriteGames') as FormArray;
}

isValidField(field: string): boolean | null
{
 return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
}

isValidFieldInArray(formArray: FormArray, i: number)
{
return formArray.controls[i].errors && formArray.controls[i].touched;
}

getFieldError(field: string): string | null
{
  if (!this.myForm.controls[field]) return null;

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

deleteGame(i: number){
return this.favoriteGames.removeAt(i);
}

addNewFavoriteGame(){
  if(this.newFavoriteGame.invalid) return;
    // this.newFavoriteGame.touched
    // return;
  // }

  const newGame = this.newFavoriteGame.value;
  this.favoriteGames.push( new FormControl(newGame, Validators.required) ) //Con FormControl

  // this.favoriteGames.push(
  //   this.fb.control(newGame, Validators.required)
  // )

  console.log(newGame)
  this.newFavoriteGame.reset();
}

onSubmit(){
  if (this.myForm.invalid){
    this.myForm.markAllAsTouched()
    return;
  }

  console.log(this.myForm.value);
  // (this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]) ;
  (this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]);
  this.myForm.reset();
}

}
