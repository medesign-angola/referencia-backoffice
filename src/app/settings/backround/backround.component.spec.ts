import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackroundComponent } from './backround.component';

describe('BackroundComponent', () => {
  let component: BackroundComponent;
  let fixture: ComponentFixture<BackroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
