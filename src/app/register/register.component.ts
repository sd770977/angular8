import { RegserviceService } from './../services/regservice.service';
import { Employee } from './../model/Employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs: RegserviceService) { }
  emp = new Employee();

  ngOnInit(): void {
  }

    onReg() {
      console.log(this.emp);
      this.rs.regEmployee(this.emp).subscribe();
      console.log('Data Registered');
    }
}
