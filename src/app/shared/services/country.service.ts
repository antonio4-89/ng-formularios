import { Injectable } from "@angular/core";
import { Country, Region, SmallCountry } from "../../core/interfaces/countries.interface";
import { HttpClient } from "@angular/common/http";
import { combineLatest, map, Observable, of, pipe, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CountryService {
    private baseUrl: string = 'https://restcountries.com/v3.1'
    private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];


    constructor(private http: HttpClient) { }

    get regions(): Region[] {
        return [...this._regions]
    }

    getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
        if (!region) return of([]);

        const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.map(country => ({
                    name: country.name.common,
                    cca3: country.cca3,
                    borders: country.borders ?? []
                }))),
                tap(response => console.log(response))
            );
        // return []
    }

    getCountryByAlphaCode(alphaCode: String): Observable<SmallCountry> {
        console.log({ alphaCode });
        const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
        return this.http.get<Country>(url)
            .pipe(
                map(country => ({
                    name: country.name.common,
                    cca3: country.cca3,
                    borders: country.borders ?? []
                }))
            )
    }

    getCountryByCodes(borders: string[]): Observable<SmallCountry[]> {
        if (!borders || borders.length === 0) return of([]);

        const countriesRequest: Observable<SmallCountry>[] = [];
        borders.forEach(code => {
            const request = this.getCountryByAlphaCode(code);
            countriesRequest.push(request);
        })
        return combineLatest(countriesRequest)
    }

}