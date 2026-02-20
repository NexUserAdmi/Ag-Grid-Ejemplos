import { Component, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, themeQuartz } from 'ag-grid-community';

@Component({
  selector: 'app-big-data-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="height: 400px; width: 100%; margin-bottom: 40px;">
      <h3>3. Virtualización de Filas (100,000 registros)</h3>
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        [theme]="theme"
        [rowData]="data()"
        [columnDefs]="colDefs"
        [rowSelection]="'multiple'"
        [suppressRowClickSelection]="true"
      />
    </div>
  `,
})
export class BigDataGrid {
  theme = themeQuartz;

  // Generamos 100k filas rápidamente
  data = signal(
    Array.from({ length: 100000 }, (_, i) => ({
      id: i + 1,
      codigo: `LOG-${Math.random().toString(36).substring(7).toUpperCase()}`,
      valor: Math.random() * 100,
      timestamp: new Date().toISOString(),
    })),
  );

  colDefs: ColDef[] = [
    {
      field: 'id',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 120,
    },
    { field: 'codigo', flex: 1 },
    { field: 'valor', flex: 1, cellRenderer: (p: any) => p.value.toFixed(4) },
    { field: 'timestamp', flex: 1.5 },
  ];
}
