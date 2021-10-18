import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyaccountHeaderComponent } from './user-myaccount-header.component';

describe('UserMyaccountHeaderComponent', () => {
  let component: UserMyaccountHeaderComponent;
  let fixture: ComponentFixture<UserMyaccountHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyaccountHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyaccountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
