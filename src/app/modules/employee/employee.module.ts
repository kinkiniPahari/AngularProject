import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeSummaryComponent } from './employee-summary.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppComponent } from 'src/app/app.component';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [AppComponent, EmployeeSummaryComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [],
    bootstrap: [AppComponent]
  }
)
export class EmployeeModule { }
