import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGrid } from './status-grid';

describe('StatusGrid', () => {
  let component: StatusGrid;
  let fixture: ComponentFixture<StatusGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
