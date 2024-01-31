import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit{
id:number;
employee:Employee
constructor(private employeService:EmployeeService, private route:ActivatedRoute){

}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

  
    this.employee=new Employee();
    this.employeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });
  }
 


}
