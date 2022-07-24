import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSpendingChartComponentComponent } from './account-spending-chart-component.component';

describe('AccountSpendingChartComponentComponent', () => {
  let component: AccountSpendingChartComponentComponent;
  let fixture: ComponentFixture<AccountSpendingChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSpendingChartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSpendingChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
