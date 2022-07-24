import { Component } from '@angular/core';
import { ISpendingPerDay } from './models/interfaces';
import * as data from './models/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expenses-chart-component';

  accountData = (data as any).default as ISpendingPerDay[];
}
