import { Component, NgModule, OnInit } from '@angular/core';
import employeeData  from './../employee-data.json';
import {CommonModule} from '@angular/common'
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Router } from "@angular/router"
import { TableModule } from 'primeng/table';
import { EmployeeStoreService } from './employee-store.service';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css']
})
export class EmployeeSummaryComponent implements OnInit {
  public countryList:{page: number; per_page: number; total: number; total_pages: number; data: { id: number; email: string; first_name: string; last_name: string; avatar: string; }[]; support: { url: string; text: string; }} = employeeData;
  public emplist1: number[]=[];
  public emplist:any;
  public totalpage: number = 0;
  public totalrecord: number = 0;
  public group: any;
  constructor(
    private router: Router,
    private employeestoreservice:EmployeeStoreService,
  ) { }

   ngOnInit(): void {
  //     this.emplist = this.countryList.data;
  //     this.totalrecord = this.emplist.total;
      
      // this.totalpage = this.emplist.total_pages;
      this.group = this.groupArray(this.countryList.data, 4);
      // var i=0;
      // this.countryList.data.forEach(element => {
      //   this.emplist[i++]=element.id;
      // }); 
    }

   groupArray<T>(data: Array<T>, n: number): Array<T[]> {
      let group = new Array<T[]>();
  ​
      for (let i = 0, j = 0; i < data.length; i++) {
          if (i >= n && i % n === 0)
              j++;
          group[j] = group[j] || [];
          group[j].push(data[i])
      }
  ​
      return group;
  }

  gotoDetails = (event: any) => {
    console.log("event clicked",event.data);
    this.employeestoreservice.setCurrentEmployee(event);
    this.router.navigate(['/employeedetails']);
};
}
