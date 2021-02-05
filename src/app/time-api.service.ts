import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employees/employees.model';

@Injectable({
  providedIn: 'root'
})
export class TimeApiService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<any> | undefined {
    const apiObject = this.getUrlAndHeader();
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': localStorage.getItem('spicaToken')!
      })
    };
    if (apiObject.apiUrl && httpOptions) {
      return this.httpClient.get(`${apiObject.apiUrl}/employee`, apiObject.headers);
    }
    return;
  };

  public addEmployee(newEmployee: Employee) {
    const apiObject = this.getUrlAndHeader();
    if (apiObject.apiUrl && apiObject.headers) {
      return this.httpClient.put(`${apiObject.apiUrl}/employee`, newEmployee, apiObject.headers);
    }
    return;

  }

  public getPresence() {

  };

  getUrlAndHeader() {
    const spicaToken = localStorage.getItem('spicaToken');
    const url = localStorage.getItem('apiUrl');
    if (spicaToken && url) {

      const httpOptions = {
        headers: new HttpHeaders({ 
          'Authorization': localStorage.getItem('spicaToken')!
        })
      };
      return {
        apiUrl: url,
        headers: httpOptions
      }
    }
    return {};
  }

}
