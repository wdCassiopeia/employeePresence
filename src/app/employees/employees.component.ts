import { Component, OnInit } from '@angular/core';
import { TimeApiService } from '../time-api.service';
import { Employee } from './employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private timeApiService: TimeApiService) { }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.refreshEmployeesList();
  }

  refreshEmployeesList() {
    this.timeApiService.getEmployees()?.subscribe(e => {
      this.employees = e.map((a: Employee) => {
        a.FirstName,
        a.LastName,
        a.Email,
        a.ReferenceId
      })
    });
  }

}
