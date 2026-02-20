import { Component, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, themeQuartz, CellValueChangedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-inventory-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="height: 400px; width: 100%; margin-bottom: 40px;">
      <h3>5. Editor Avanzado con Validación (Gratis)</h3>
      <p>
        <small>Intenta poner un stock negativo o un precio mayor a 1000.</small>
      </p>
      <ag-grid-angular
        style="width: 100%; height: 300px;"
        [theme]="theme"
        [rowData]="productos()"
        [columnDefs]="colDefs"
        (cellValueChanged)="onCellValueChanged($event)"
      />
    </div>
  `,
})
export class InventoryGrid {
  theme = themeQuartz;
  productos = signal([
    { ref: 'PROD-01', stock: 10, precio: 500 },
    { ref: 'PROD-02', stock: 5, precio: 150 },
  ]);

  colDefs: ColDef[] = [
    { field: 'ref', editable: false },
    {
      field: 'stock',
      editable: true,
      cellClassRules: {
        'cell-error': (params: any) => params.value < 0,
        'cell-warning': (params: any) => params.value === 0,
      },
    },
    {
      field: 'precio',
      editable: true,
      cellEditor: 'agNumberCellEditor',
      cellEditorParams: { min: 0, max: 1000 },
      valueParser: (params: any) => Number(params.newValue),
    },
  ];

  onCellValueChanged(event: CellValueChangedEvent) {
    console.log('Dato actualizado en Zoneless:', event.data);
    // Aquí podrías disparar una petición a tu API para guardar
  }
}
