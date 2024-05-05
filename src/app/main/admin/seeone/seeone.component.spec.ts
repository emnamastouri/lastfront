import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeoneComponent } from './seeone.component';

describe('SeeoneComponent', () => {
  let component: SeeoneComponent;
  let fixture: ComponentFixture<SeeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
