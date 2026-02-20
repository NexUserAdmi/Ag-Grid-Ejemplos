import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFilterGrid } from './advanced-filter-grid';

describe('AdvancedFilterGrid', () => {
  let component: AdvancedFilterGrid;
  let fixture: ComponentFixture<AdvancedFilterGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFilterGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedFilterGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
