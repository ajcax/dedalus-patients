import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../interfaces/patient.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  patient: Patient | undefined

  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.patientService.getPatients().subscribe(data => {
      this.patient = data.find(patient => patient.id === id);
     });
  }
}
