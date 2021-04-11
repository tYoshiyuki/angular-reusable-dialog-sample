import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionFrameComponent } from './dialog-action-frame.component';

describe('DialogActionFrameComponent', () => {
  let component: DialogActionFrameComponent;
  let fixture: ComponentFixture<DialogActionFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogActionFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
