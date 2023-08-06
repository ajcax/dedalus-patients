import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../../interfaces/patient.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      console.log(data)
      this.patients = data.map(entry => entry);
    });
   }

   goToDetail(patient: Patient): void {
     this.router.navigate(['/detail', patient.id]);
   }
}
