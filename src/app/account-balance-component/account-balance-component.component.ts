import { Component, Input, OnInit } from '@angular/core';
import { ISpendingPerDay } from '../models/interfaces';

@Component({
  selector: 'app-account-balance-component',
  templateUrl: './account-balance-component.component.html',
  styleUrls: ['./account-balance-component.component.scss']
})
export class AccountBalanceComponentComponent implements OnInit {

  @Input() accountData: ISpendingPerDay[] = [];
  accountBalance: number = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.accountData) {
      this.accountBalance = 921.48;
    }
  }

}
