import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiURL = 'http://hapi.fhir.org/baseR4/Patient';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map((data) => data.entry.map((entry: any) => entry.resource as Patient))
    );
  }
}
