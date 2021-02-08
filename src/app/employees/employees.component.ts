import { Component, OnInit } from '@angular/core';
import { TimeApiService } from '../time-api.service';
import { Employee } from './employees.model';
import mockEmployees from '../../assets/mockEmployees.json';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private timeApiService: TimeApiService) { }

  employees: Employee[] = mockEmployees.map(a => {
    return {
      FirstName: a.FirstName,
      MiddleName: a.MiddleName,
      LastName: a.LastName,
      Email: a.Email,
      ReferenceId: a.ReferenceId
    }
  });


  ngOnInit(): void {
    this.refreshEmployeesList();
  }

  refreshEmployeesList() {
/*     this should be called, but the api call is not functional yet, so, mock data
    this.employees = this.timeApiService.getEmployees(); */
  }

}
