import { Employee } from './../model/Employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditservicesService {
      url="http://localhost:9096/getprd/editProd";
  constructor(private http: HttpClient) { }


  editEmp(id) {

   return this.http.get<Employee>(this.url + "/" + id);
}
}
