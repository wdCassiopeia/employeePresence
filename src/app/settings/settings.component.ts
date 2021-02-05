import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { 
  }


  ngOnInit(): void {
  }
  setToken(apiAddress: string, authKey: string) {
    if (apiAddress && authKey) {
      localStorage.setItem('apiUrl', apiAddress);
      localStorage.setItem('spicaToken', 'SpicaToken ' + authKey)
    }
  }

}
