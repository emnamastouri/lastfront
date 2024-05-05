import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateagentComponent } from './updateagent.component';

describe('UpdateagentComponent', () => {
  let component: UpdateagentComponent;
  let fixture: ComponentFixture<UpdateagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
