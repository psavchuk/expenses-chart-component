import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSpendingTotalComponentComponent } from './account-spending-total-component.component';

describe('AccountSpendingTotalComponentComponent', () => {
  let component: AccountSpendingTotalComponentComponent;
  let fixture: ComponentFixture<AccountSpendingTotalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSpendingTotalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSpendingTotalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
