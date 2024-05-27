import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageagentsComponent } from './manageagents.component';

describe('ManageagentsComponent', () => {
  let component: ManageagentsComponent;
  let fixture: ComponentFixture<ManageagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageagentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
