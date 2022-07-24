import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBalanceComponentComponent } from './account-balance-component.component';

describe('AccountBalanceComponentComponent', () => {
  let component: AccountBalanceComponentComponent;
  let fixture: ComponentFixture<AccountBalanceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBalanceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBalanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
