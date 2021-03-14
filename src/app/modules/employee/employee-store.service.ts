import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStoreService {
  private _setCurrentEmployeeState: BehaviorSubject<Object>;
  public _setCurrentEmployee$: Observable<Object>;
  private _setCurrentEmployeeConfig: Object = 0;
  constructor() { 
    this._setCurrentEmployeeState = new BehaviorSubject(
      this._setCurrentEmployeeConfig
    );
    this._setCurrentEmployee$ = this._setCurrentEmployeeState.asObservable();

  }

  setCurrentEmployee(data: object) {
    const msg = Object.assign(data);
    this._setCurrentEmployeeState.next(msg);
  }
}
