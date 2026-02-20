import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGrid } from './action-grid';

describe('ActionGrid', () => {
  let component: ActionGrid;
  let fixture: ComponentFixture<ActionGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
