import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class EmailValidators implements AsyncValidator {

    validate(control: AbstractControl): Observable<ValidationErrors | null> {

        const email = control.value;
        
        // El . subscribe que usamos este este el SUBSCRIBER
        const httpCallObservable = new Observable<ValidationErrors>((subscriber) => {
        
             if (email === 'laaammc@gmail.com'){
                subscriber.next({ emailTaken: true });
                subscriber.complete();
             }

             subscriber.next(null!)
             subscriber.complete();

        }).pipe(
            delay(3000)
        )

        return httpCallObservable;

    }

    // validate(control: AbstractControl): Observable<ValidationErrors | null> {

    //     const email = control.value;
    // console.log({email})


    // return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(3000)
    //     )

    // }

    //Opcional para ver si el validator cambia
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }

}


// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//   // delay(3000),
//   map( resp => {
//     return ( resp.length === 0 )
//         ? null
//         : { emailTaken: true }
//   })
// );