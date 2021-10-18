import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPerProvinceComponent } from './sales-per-province.component';

describe('SalesPerProvinceComponent', () => {
  let component: SalesPerProvinceComponent;
  let fixture: ComponentFixture<SalesPerProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPerProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPerProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
