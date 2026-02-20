import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalGrid } from './normal-grid';

describe('NormalGrid', () => {
  let component: NormalGrid;
  let fixture: ComponentFixture<NormalGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
