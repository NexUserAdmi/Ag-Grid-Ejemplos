import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrid } from './detail-grid';

describe('DetailGrid', () => {
  let component: DetailGrid;
  let fixture: ComponentFixture<DetailGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
