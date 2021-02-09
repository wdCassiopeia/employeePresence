import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeApiService } from '../time-api.service';
import { Employee } from './employees.model';
import mockEmployees from '../../assets/mockEmployees.json';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEmployeeComponent } from './component/addEmployee.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  constructor(private timeApiService: TimeApiService, public dialogService: DialogService) { }

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

  ref: DynamicDialogRef | null = null;;

    show() {
        this.ref = this.dialogService.open(AddEmployeeComponent, {
            header: 'Add employee',
            width: '70%',
            contentStyle: {"max-height": "500px", "overflow": "auto"},
            baseZIndex: 10000
        });
        this.ref.onClose.subscribe((emp: Employee) => {
          if (emp) {
            this.timeApiService.addEmployee(emp);
          }
      });
    }

  refreshEmployeesList() {
/*     this should be called, but the api call is not functional yet, so, mock data
    this.employees = this.timeApiService.getEmployees(); */
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}

}
