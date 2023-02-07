import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetConnectComponent } from './widget-connect.component';

describe('WidgetConnectComponent', () => {
  let component: WidgetConnectComponent;
  let fixture: ComponentFixture<WidgetConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
