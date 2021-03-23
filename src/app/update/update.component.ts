import { Employee } from './../model/Employee.model';
import { UpdateservicesService } from './../services/updateservices.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private rout: ActivatedRoute, private us: UpdateservicesService) { }
    emp =new Employee();
    employees: any=[];
  ngOnInit(): void {

    this.rout.params.subscribe(params =>{
      this.emp=params['emps'];
      console.log('update ts : '+ this.emp);
      this.us.updataEmp(this.emp).subscribe(ep => {
        this.employees=ep;
        console.log(this.employees);
      });
    });
  }

  

}
