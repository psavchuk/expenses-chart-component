import { Component, Input, OnInit } from '@angular/core';
import { ISpendingPerDay } from '../../models/interfaces';

@Component({
  selector: 'app-account-spending-total-component',
  templateUrl: './account-spending-total-component.component.html',
  styleUrls: ['./account-spending-total-component.component.scss']
})
export class AccountSpendingTotalComponentComponent implements OnInit {

  @Input() accountData: ISpendingPerDay[] = [];
  @Input() monthKey: string = "";

  weekSpent: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.weekSpent = this._parseAccountData();
  }


  private _parseAccountData(): number {
    let balance = 0;
    for (let i = 0; i < this.accountData.length; i++) {
      balance += this.accountData[i].amount;
    }
    return balance;
  }

}
