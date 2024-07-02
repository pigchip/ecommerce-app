import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Country {
  id: number;
  countryName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://ecommerce-il4q.onrender.com/api/countries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }
}
