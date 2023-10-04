import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-services',
  template: `
    <h2>Employee List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  employees: any = [];
  errorMsg: any;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
