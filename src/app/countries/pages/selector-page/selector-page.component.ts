import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CountryService } from '../../../shared/services/country.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region, SmallCountry } from '../../../core/interfaces/countries.interface';
import { filter, pipe, switchMap, tap } from 'rxjs';

@Component({
    selector: 'app-selector-page',
    templateUrl: './selector-page.component.html',
    styleUrls: ['./selector-page.component.css'],
    standalone: false
})
export class SelectorPageComponent implements OnInit {

    countriesByRegion: SmallCountry[] = []
    borders: SmallCountry[] = []

    myForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private countriesService: CountryService
    ) {
        this.myForm = this.fb.group({
            region: ['', Validators.required],
            country: ['', Validators.required],
            border: ['', Validators.required]
        })
    }

    ngOnInit(): void {
        // this.myForm = this.fb.group({
        //     region: ['', Validators.required],
        //     country:['', Validators.required],
        //     borders:['', Validators.required]
        // })

        this.onRegionChanged();
        this.onCountryChanged();
        }
        get regions(): Region[] {
        return this.countriesService.regions;
    }

    onRegionChanged(): void {
        this.myForm.get('region')?.valueChanges
            .pipe(
                //La SIGUIENTE LINEA ES PARA MEJORAR LA UX, SETEANDO UN CAMPO DEL FORM PARA QUE NO SE PONGO EN BLANCO Y TENGA SELECCIONAR UN PAIS
                tap( () => this.myForm.get('country')!.setValue('' ) ),
                //LA SIGUIENTE LINEA BORRA LAS FRONTERAS - RESETEA
                tap( () => this.borders = [] ),
                switchMap(region => this.countriesService.getCountriesByRegion(region))
            )
            .subscribe({
                next: (region: any) => {
                    this.countriesByRegion = region;
                    console.log({ region })
                }
            })
        }
        
        onCountryChanged(): void {
            this.myForm.get('country')?.valueChanges
            .pipe(
                tap(() => this.myForm.get('border')!.setValue('')),
                filter( (value: string) => value.length > 0 ),
                switchMap( alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
                switchMap( country => this.countriesService.getCountryByCodes( country.borders ) )
        )
        .subscribe({
            next: (country: any) => {
                // this.borders = country.borders;
                this.borders = country;
            // console.log({border})
        }})
    }
    

}
