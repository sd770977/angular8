import { Employee } from './../model/Employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EditservicesService } from './../services/editservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    id : number;
    
    emps = new Employee();
     constructor(private es: EditservicesService, private rout: ActivatedRoute, private rt1: Router) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params =>
      {
        this.id = params['id'];
        this.es.editEmp(this.id).subscribe(e => 
          {
            this.emps= e;
            console.log(this.emps);
          });
      });
  }

        onUpdate() {
          console.log('Edit ts: '+ this.emps);
              this.rt1.navigate(['up', this.emps]);
             
        }

     

}
