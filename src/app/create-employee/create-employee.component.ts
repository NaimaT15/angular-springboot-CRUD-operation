import { EmployeeService } from './../employee.service';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService,private router:Router){

  }
  ngOnit(): void{

  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{console.log(data);
      this.goToEmployeeList();
    },error=>console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employee']);

  }
 onSubmit(){
  console.log(this.employee)
  this.saveEmployee();


 }
}
