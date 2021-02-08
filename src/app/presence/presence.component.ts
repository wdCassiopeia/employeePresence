import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employees/employees.model';
import { TimeApiService } from '../time-api.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  presenceData: Employee[] = [];

  reactiveForm!: FormGroup;
  constructor(private builder: FormBuilder,
    private timeApiService: TimeApiService) { 
  }


  ngOnInit(): void {
    this.reactiveForm = this.builder.group({
      orgUnitId: [null, Validators.required]
    });
  }

  loadData(orgUnitId: string) {
    this.presenceData = this.timeApiService.getPresence(orgUnitId);
  }

}
