import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirallhostComponent } from './voirallhost.component';

describe('VoirallhostComponent', () => {
  let component: VoirallhostComponent;
  let fixture: ComponentFixture<VoirallhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoirallhostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirallhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
