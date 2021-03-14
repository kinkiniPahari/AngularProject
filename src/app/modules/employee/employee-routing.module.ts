import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeSummaryComponent } from './employee-summary.component';

const routes: Routes = [
  // { path: '',     component: EmployeeSummaryComponent},
  // { path: 'employeedetails',     component: EmployeeDetailsComponent},
  {
    path: '',
    component: EmployeeSummaryComponent,
    children: [
     {
        path: '',
        redirectTo: 'employeesummary',
        pathMatch: 'prefix'
     },
     {
        path: 'employeedetails',
        component: EmployeeDetailsComponent
     }
   ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
