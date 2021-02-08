import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employees/employees.model';

@Injectable({
  providedIn: 'root'
})
export class TimeApiService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Employee[] {
    const apiObject = this.getUrlAndHeader();
    if (apiObject.apiUrl && apiObject.headers) {
      this.httpClient.get<any[]>(`${apiObject.apiUrl}/employee`, apiObject.headers).subscribe(
        result => {
          return result.map((a) => {
            a.FirstName,
              a.LastName,
              a.Email,
              a.ReferenceId
          });
        }
      )
    }
    return [];
  }

  public addEmployee(newEmployee: Employee) {
    const apiObject = this.getUrlAndHeader();
    if (apiObject.apiUrl && apiObject.headers) {
      return this.httpClient.put(`${apiObject.apiUrl}/employee`, newEmployee, apiObject.headers);
    }
    return;
  }

  public getPresence(organizationalUnitId: string): any[] {
    const apiObject = this.getUrlAndHeader();
    const currentTimestamp = new Date().toDateString();
    if (apiObject.apiUrl && apiObject.headers && organizationalUnitId) {
      this.httpClient.get<any[]>(`${apiObject.apiUrl}/presence?TimeStamp=${currentTimestamp}&OrgUnitID=${organizationalUnitId}&showInactiveEmployees=false`, apiObject.headers);
    }
    return [];
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
