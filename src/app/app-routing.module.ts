import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './modules/add-employee/add-employee/add-employee.component';
import { EmployeeSummaryComponent } from './modules/employee/employee-summary.component';

import { TableModule } from 'primeng/table';
import { EmployeeDetailsComponent } from './modules/employee/employee-details/employee-details.component';

const routes: Routes = [
  { path: '',     component: EmployeeSummaryComponent},
  { path: 'employeesummary',     component: EmployeeSummaryComponent},
  { path: 'addemployee',     component: AddEmployeeComponent},
  { path: 'employeedetails', component: EmployeeDetailsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,TableModule]
})
export class AppRoutingModule { }
