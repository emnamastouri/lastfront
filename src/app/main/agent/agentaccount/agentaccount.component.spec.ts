import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentaccountComponent } from './agentaccount.component';

describe('AgentaccountComponent', () => {
  let component: AgentaccountComponent;
  let fixture: ComponentFixture<AgentaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
