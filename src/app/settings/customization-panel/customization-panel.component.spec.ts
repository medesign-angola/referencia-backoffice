import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationPanelComponent } from './customization-panel.component';

describe('CustomizationPanelComponent', () => {
  let component: CustomizationPanelComponent;
  let fixture: ComponentFixture<CustomizationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
