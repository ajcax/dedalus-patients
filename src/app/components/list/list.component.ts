import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../../interfaces/patient.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  patients: Patient[] = [];
  showList = true;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data.map(entry => entry);
      this.showList = true;
    });
  }

  goToDetail(patient: Patient): void {
    this.showList = false;
    this.router.navigate(['/detail', patient.id]);
  }
}
