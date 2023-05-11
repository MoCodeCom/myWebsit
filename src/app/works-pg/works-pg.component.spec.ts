import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksPgComponent } from './works-pg.component';

describe('WorksPgComponent', () => {
  let component: WorksPgComponent;
  let fixture: ComponentFixture<WorksPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
