import { Component, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, themeQuartz } from 'ag-grid-community';

@Component({
  selector: 'app-filter-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="height: 350px; width: 100%; margin-bottom: 40px;">
      <h3>2. Filtros de Datos y Paginación (Gratis)</h3>
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        [theme]="theme"
        [rowData]="ventas()"
        [columnDefs]="colDefs"
        [pagination]="true"
        [paginationPageSize]="5"
        [paginationPageSizeSelector]="[5, 10, 20]"
      />
    </div>
  `
})
export class FilterGrid {
  theme = themeQuartz;
  ventas = signal(Array.from({length: 20}, (_, i) => ({
    id: i + 1,
    producto: `Producto ${String.fromCharCode(65 + i)}`,
    precio: Math.floor(Math.random() * 1000),
    fecha: new Date(2024, 0, i + 1)
  })));

  colDefs: ColDef[] = [
    { field: 'id', width: 80 },
    { field: 'producto', filter: 'agTextColumnFilter' },
    {
      field: 'precio',
      filter: 'agNumberColumnFilter',
      valueFormatter: p => `$${p.value.toLocaleString()}`
    },
    {
      field: 'fecha',
      filter: 'agDateColumnFilter',
      valueFormatter: p => p.value.toLocaleDateString()
    }
  ];
}
