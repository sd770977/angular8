import { Employee } from './../model/Employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateservicesService {

  url="http://localhost:9096/getprd/updateProd";
  constructor(private http: HttpClient) { }

  updataEmp(emp)
  {
    console.log(emp);
    return this.http.put<Employee[]>(this.url, emp);
  }
}
