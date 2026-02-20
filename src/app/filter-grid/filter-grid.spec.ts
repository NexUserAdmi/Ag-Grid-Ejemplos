import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGrid } from './filter-grid';

describe('FilterGrid', () => {
  let component: FilterGrid;
  let fixture: ComponentFixture<FilterGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
