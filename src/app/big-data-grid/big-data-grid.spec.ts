import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataGrid } from './big-data-grid';

describe('BigDataGrid', () => {
  let component: BigDataGrid;
  let fixture: ComponentFixture<BigDataGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigDataGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigDataGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
