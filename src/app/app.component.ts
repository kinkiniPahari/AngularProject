import { Component } from '@angular/core';
import employeeData  from './modules/employee-data.json';

import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
const allawableUrl: string[] = [
  "/",
  "/employee",
  "/addemployee",
];
  }
  routerLink = (event: any) => {
    console.log("event clicked",event)
};
}
