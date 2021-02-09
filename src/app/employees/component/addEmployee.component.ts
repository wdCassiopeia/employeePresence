import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TimeApiService } from 'src/app/time-api.service';
import { Employee } from '../employees.model';

@Component({
    selector: 'app-add-employee',
    templateUrl: './addEmployee.component.html'
  })

export class AddEmployeeComponent {
            
    constructor(private timeApiSevice: TimeApiService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        public builder: FormBuilder) { }
        
    reactiveForm!: FormGroup;
    ngOnInit() {
        this.reactiveForm = this.builder.group({
            FirstName: [null, Validators.required],
            LastName: [null, Validators.required],
            ReferenceId: [null, null],
            Email: [null, null]
          });
    }

    addEmployee(employee: Employee) {
        this.ref.close(employee);
    }
}