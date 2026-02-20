import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, themeQuartz } from 'ag-grid-community';

@Component({
  selector: 'app-status-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="height: 300px; width: 100%; margin-bottom: 40px;">
      <h3>1. Cell Renderers & Eventos (Gratis)</h3>
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        [theme]="theme"
        [rowData]="data()"
        [columnDefs]="colDefs"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusGrid {
  theme = themeQuartz;
  data = signal([
    { tarea: 'Configurar Angular', prioridad: 'Alta', completado: 80 },
    { tarea: 'Instalar AG Grid', prioridad: 'Media', completado: 100 },
    { tarea: 'Modo Zoneless', prioridad: 'Alta', completado: 40 },
  ]);

  colDefs: ColDef[] = [
    { field: 'tarea', flex: 2 },
    {
      field: 'prioridad',
      cellStyle: (params) => ({
        backgroundColor: params.value === 'Alta' ? '#ffebee' : '#e8f5e9',
        color: params.value === 'Alta' ? '#c62828' : '#2e7d32',
        fontWeight: 'bold',
      }),
    },
    {
      field: 'completado',
      // Renderizamos una "barra de progreso" manual con HTML
      cellRenderer: (params: any) => `
        <div style="background: #eee; width: 100%; height: 10px; border-radius: 5px; margin-top: 15px;">
          <div style="background: #3b82f6; width: ${params.value}%; height: 100%; border-radius: 5px;"></div>
        </div>
      `,
    },
  ];
}
