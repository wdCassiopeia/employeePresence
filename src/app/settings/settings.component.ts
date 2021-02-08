import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  reactiveForm!: FormGroup;
  constructor(private builder: FormBuilder) { 
  }


  ngOnInit(): void {
    this.reactiveForm = this.builder.group({
      apiAddress: [null, Validators.required],
      authKey: [null, Validators.required]
    });
  }
  setToken(apiAddress: string, authKey: string) {
    if (apiAddress && authKey) {
      localStorage.setItem('apiUrl', apiAddress);
      localStorage.setItem('spicaToken', 'SpicaToken ' + authKey)
    }
  }

}
