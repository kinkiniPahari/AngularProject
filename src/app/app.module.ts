import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeSummaryComponent } from './modules/employee/employee-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [TableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
