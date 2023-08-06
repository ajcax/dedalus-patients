import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient.interface';
import { FhirApiService } from './fhirApi.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiURL = 'http://hapi.fhir.org/baseR4/Patient';

  constructor(private fhirApiService: FhirApiService) {}
  getPatients(): Observable<Patient[]> {
    return this.fhirApiService.getPatientsFromFhir();
  }
}
