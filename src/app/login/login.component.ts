import { Router } from '@angular/router';
import { LoginservicesService } from './../services/loginservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls: LoginservicesService, private rt : Router) { }
    uname : "";
    pass : "";
    employees : any = [];
    showDivOne = true;
    showDivTwo = false;
  ngOnInit(): void {
  }

  onlog() {

    console.log(this.uname + ' ' + this.pass);
      this.ls.loginCheck(this.uname, this.pass).subscribe( rs => {
      console.log("================");
      this.employees = rs;
      console.log(this.employees);

      this.showDivOne = false;
      this.showDivTwo = true;
      });

    }

      editData(empid) {
        console.log('From Display: '+empid);
        this.rt.navigate(['edit', empid]);
      }
  }


