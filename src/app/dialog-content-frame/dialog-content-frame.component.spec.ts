import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentFrameComponent } from './dialog-content-frame.component';

describe('DialogContentFrameComponent', () => {
  let component: DialogContentFrameComponent;
  let fixture: ComponentFixture<DialogContentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
