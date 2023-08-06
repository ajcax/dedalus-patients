import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class FhirApiService {
  private apiURL = 'http://hapi.fhir.org/baseR4/Patient';

  constructor(private http: HttpClient) { }

  getPatientsFromFhir(): Observable<Patient[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map((data) => this.adaptFhirToDomain(data))
    );
  }

  private adaptFhirToDomain(data: any): Patient[] {
    return data.entry.map((entry: any) => {
      const {id, name, birthDate, gender, address, contact, telecom} = entry.resource
      return { id, name, birthDate, gender, address, contact, telecom } as Patient
    });
  }
}
