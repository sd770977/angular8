import { Employee } from './../model/Employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {

  url="http://localhost:9096/getprd/loginProd";
  constructor(private http: HttpClient) { }


  loginCheck(un, ps) {

      return this.http.get<Employee[]>(this.url+"/"+un+"/"+ps);
  }
}
