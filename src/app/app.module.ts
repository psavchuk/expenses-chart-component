import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountBalanceComponentComponent } from './account-balance-component/account-balance-component.component';
import { AccountSpendingChartComponentComponent } from './account-spending-chart-component/account-spending-chart-component.component';
import { AccountSpendingTotalComponentComponent } from './account-spending-chart-component/account-spending-total-component/account-spending-total-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountBalanceComponentComponent,
    AccountSpendingChartComponentComponent,
    AccountSpendingTotalComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
