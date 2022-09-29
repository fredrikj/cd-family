import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushChildComponent } from './push-child.component';

describe('PushChildComponent', () => {
  let component: PushChildComponent;
  let fixture: ComponentFixture<PushChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
