import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidators } from '../../../shared/validators/email-validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone: false,
})
export class RegisterPageComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidators: EmailValidators
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      // name:     ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
      name: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern),],],
      // email:    ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [new EmailValidators()] ],
      email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern),],[this.emailValidators] ],
      userName: ['', [Validators.required, this.validatorService.cantBeStrider],],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    }, {
      validators: [
        this.validatorService.isFieldOneEqualFieldTwo('password', 'password2')
      ]
    //       validators: [
    //   this.validatorService.isFieldOneEqualFieldTwo('password','password2')
    // ]
    });
  }

  isValidField(field: string) {
    // TODO:
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    if (this.myForm.invalid) return;
    // {
    //   this.myForm.markAllAsTouched()
    //   return;
    // }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
