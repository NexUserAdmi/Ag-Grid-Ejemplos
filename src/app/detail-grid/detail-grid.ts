import { Component, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, themeQuartz, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-detail-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="display: flex; gap: 20px; height: 400px; margin-bottom: 40px;">
      <div style="flex: 2;">
        <h3>4. Interacción Compleja (Selección -> Detalle)</h3>
        <ag-grid-angular
          style="width: 100%; height: 350px;"
          class="ag-theme-quartz"
          [theme]="theme"
          [rowData]="empleados"
          [columnDefs]="colDefs"
          (rowClicked)="onRowClicked($event)"
        />
      </div>

      <div
        style="flex: 1; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px;"
      >
        <h4>Detalle del Registro</h4>
        @if (selectedRow()) {
          <p><strong>Nombre:</strong> {{ selectedRow().nombre }}</p>
          <p><strong>Cargo:</strong> {{ selectedRow().cargo }}</p>
          <p>
            <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <button (click)="selectedRow.set(null)">Cerrar</button>
        } @else {
          <p style="color: #64748b;">
            Selecciona una fila para ver el detalle...
          </p>
        }
      </div>
    </div>
  `,
})
export class DetailGrid {
  theme = themeQuartz;
  selectedRow = signal<any>(null);

  empleados = [
    { nombre: 'Alice Vance', cargo: 'Software Engineer', sueldo: 85000 },
    { nombre: 'Bob Smith', cargo: 'Product Manager', sueldo: 92000 },
    { nombre: 'Charlie Day', cargo: 'UX Designer', sueldo: 78000 },
  ];

  colDefs: ColDef[] = [
    { field: 'nombre', flex: 1 },
    { field: 'cargo', flex: 1 },
    {
      headerName: 'Acción',
      cellRenderer: () => `<button style="cursor: pointer;">Ver Info</button>`,
    },
  ];

  onRowClicked(event: RowClickedEvent) {
    this.selectedRow.set(event.data);
  }
}
