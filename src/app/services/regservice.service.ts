import { Employee } from './../model/Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor(private http : HttpClient ) { }

  url="http://localhost:9096/getprd/regProd";

  regEmployee(emp: Employee) {
      return this.http.post(this.url, emp);
  }


}
