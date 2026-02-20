import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FilterGrid } from './filter-grid/filter-grid';
import { StatusGrid } from './status-grid/status-grid';
import { NormalGrid } from './normal-grid/normal-grid';
import { BigDataGrid } from './big-data-grid/big-data-grid';
import { DetailGrid } from './detail-grid/detail-grid';
import { AdvancedFilterGrid } from './advanced-filter-grid/advanced-filter-grid';
import { InventoryGrid } from './inventory-grid/inventory-grid';
import { ActionGrid } from './action-grid/action-grid';
import { ActionGridApi } from './action-grid-api/action-grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StatusGrid,
    FilterGrid,
    NormalGrid,
    BigDataGrid,
    DetailGrid,
    AdvancedFilterGrid,
    InventoryGrid,
    ActionGrid,
    ActionGridApi,
  ], // Añade aquí
  template: `
    <nav
      style="background: #1e293b; color: white; padding: 1rem; margin-bottom: 2rem;"
    >
      <h2>Dashboard de Funcionalidades Gratuitas</h2>
    </nav>

    <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      <app-normal-grid />
      <hr />
      <app-detail-grid />
      <hr />
      <app-filter-grid />
      <hr />
      <app-status-grid />
      <hr />
      <app-big-data-grid />
      <hr />
      <app-advanced-filter-grid />
      <hr />
      <app-inventory-grid />
      <hr />
      <app-action-grid />
      <hr />
      <app-action-grid-api />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
