import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
// 1. Importamos ColGroupDef
import { ColDef, ColGroupDef, themeQuartz } from 'ag-grid-community';
import { GRID_GLOBAL_CONFIG } from '../locale.es';

@Component({
  selector: 'app-advanced-filter-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="height: 400px; width: 100%; margin-bottom: 40px;">
      <h3>6. Jerarquía de Encabezados y Filtros Lógicos</h3>
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        [theme]="theme"
        [rowData]="data"
        [columnDefs]="colDefs"
        [localeText]="gridOptions.localeText"
        [defaultColDef]="gridOptions.defaultColDef"
        [paginationPageSize]="gridOptions.paginationPageSize"
      />
    </div>
  `,
})
export class AdvancedFilterGrid {
  theme = themeQuartz;
  gridOptions = GRID_GLOBAL_CONFIG;

  // 2. Definimos el arreglo con la unión de ambos tipos
  colDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Información del Vehículo',
      children: [
        { field: 'marca', filter: 'agTextColumnFilter' },
        { field: 'modelo', filter: 'agTextColumnFilter' },
      ],
    },
    {
      headerName: 'Especificaciones Técnicas',
      children: [
        {
          field: 'potencia',
          headerName: 'HP',
          filter: 'agNumberColumnFilter',
          filterParams: { buttons: ['apply', 'reset'] },
        },
        {
          field: 'consumo',
          filter: 'agNumberColumnFilter',
        },
      ],
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    floatingFilter: true,
    resizable: true,
  };

  data = [
    { marca: 'Tesla', modelo: 'Model S', potencia: 670, consumo: 18.1 },
    { marca: 'BMW', modelo: 'i4', potencia: 340, consumo: 16.5 },
    { marca: 'Audi', modelo: 'e-tron', potencia: 408, consumo: 22.4 },
  ];
}
