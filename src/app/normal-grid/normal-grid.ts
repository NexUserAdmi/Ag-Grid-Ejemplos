import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

import { themeQuartz } from 'ag-grid-community';

@Component({
  selector: 'app-normal-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <main style="padding: 20px;">
      <h1>Panel de Control <small>(Modo Zoneless)</small></h1>

      <div style="height: 400px; width: 100%;">
        <ag-grid-angular
          style="width: 100%; height: 100%;"
          [theme]="myTheme"
          [rowData]="usuarios()"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [pagination]="true"
        />
      </div>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NormalGrid {
  myTheme = themeQuartz;
  // Datos reactivos con Signals
  usuarios = signal([
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
    { id: 1, nombre: 'Ana García', rol: 'Admin', fecha: '2024-01-10' },
    { id: 2, nombre: 'Luis Pérez', rol: 'Editor', fecha: '2024-02-15' },
    { id: 3, nombre: 'Marta Rivas', rol: 'Lector', fecha: '2024-03-01' },
  ]);

  // Configuración de columnas (Funcionalidades Gratuitas)
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'nombre',
      headerName: 'Usuario Full Name',
      filter: 'agTextColumnFilter',
      editable: true,
    },
    { field: 'rol', headerName: 'Permisos', editable: true },
    { field: 'fecha', headerName: 'Registro' },
  ];

  // Comportamiento por defecto (Gratis: Ordenar y Redimensionar)
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    floatingFilter: true, // El buscador debajo de la cabecera
  };

  onGridReady(params: GridReadyEvent) {
    console.log('AG Grid inicializada sin Zone.js');
  }
}
