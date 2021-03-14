import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeStoreService } from '../employee-store.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  subscription: Array<Subscription> = [];
  public currentEmployee : any;
  constructor(
    
    private employeestoreservice:EmployeeStoreService,
  ) {}

  ngOnInit(): void {
    this.subscription.push(
      this.employeestoreservice._setCurrentEmployee$
      .pipe()
      .subscribe(
        (currentEmployeedata) =>
          this.currentEmployee = currentEmployeedata
      )
    )
  }

}
