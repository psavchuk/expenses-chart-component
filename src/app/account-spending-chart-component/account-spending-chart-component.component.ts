import { Component, Input, OnInit } from '@angular/core';
import { daysOfWeek } from '../models/constants';
import { ISpendingPerDay } from '../models/interfaces';

@Component({
  selector: 'app-account-spending-chart-component',
  templateUrl: './account-spending-chart-component.component.html',
  styleUrls: ['./account-spending-chart-component.component.scss']
})
export class AccountSpendingChartComponentComponent implements OnInit {

  @Input() accountData: ISpendingPerDay[] = [];
  hoveredDay: string = "";
  
  constructor() { }

  ngOnInit(): void {}
  
  onMouseEnter(elem: any, day: ISpendingPerDay): void {
    this.hoveredDay = day.day;
  }

  onMouseLeave(elem: any, day: ISpendingPerDay): void {
    if (this.hoveredDay === day.day)
      this.hoveredDay = "";
  }

  getCurrentDay(key: ISpendingPerDay): boolean {
    const today = new Date().getDay();
    return key.day === daysOfWeek.find((value) => value.value === today)?.key;
  }

}
