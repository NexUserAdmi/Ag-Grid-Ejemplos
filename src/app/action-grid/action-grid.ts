import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  themeQuartz,
  GridApi,
  GridReadyEvent,
  RowSelectionOptions,
} from 'ag-grid-community';
import { SelectFilterComponent } from '../components/select-filter.component';
import { GRID_GLOBAL_CONFIG } from '../locale.es';

@Component({
  selector: 'app-action-grid',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="margin-bottom: 40px;">
      <h3>7. Selección Masiva y Filtros de Lista (Select)</h3>

      <div
        style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center;"
      >
        <button
          (click)="enviarSeleccionados()"
          style="padding: 8px 16px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Enviar IDs Seleccionados
        </button>
        <button
          (click)="limpiarTodosLosFiltros()"
          style="padding: 8px 16px; background: #64748b; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Limpiar Filtros
        </button>
        <span style="font-size: 0.9rem; color: #64748b;">
          * Solo se enviarán los IDs (no visibles en la tabla)
        </span>
      </div>

      <div style="height: 400px; width: 100%;">
        <ag-grid-angular
          style="width: 100%; height: 100%;"
          [theme]="theme"
          [rowData]="data"
          [columnDefs]="colDefs"
          [rowSelection]="rowSelection"
          [suppressRowClickSelection]="true"
          (gridReady)="onGridReady($event)"
          [defaultColDef]="defaultColDef"
          [localeText]="gridOptions.localeText"
          [defaultColDef]="gridOptions.defaultColDef"
          [pagination]="true"
          [paginationPageSize]="gridOptions.paginationPageSize"
          [paginationPageSizeSelector]="gridOptions.paginationPageSizeSelector"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionGrid {
  theme = themeQuartz;
  gridOptions = GRID_GLOBAL_CONFIG;
  private gridApi!: GridApi;

  // Configuración de selección
  rowSelection: RowSelectionOptions = {
    mode: 'multiRow',
    headerCheckbox: true, // Esto activa el "Seleccionar todo" en la cabecera
    selectAll: 'filtered', // Solo selecciona lo que pasa el filtro actual
  };

  // El ID existe en los datos pero NO tendrá una ColDef, por lo que será invisible
  data = [
    {
      internal_id: 'uuid-987',
      nombre: 'Laptop Pro',
      categoria: 'Electrónica',
      prioridad: 'Alta',
    },
    {
      internal_id: 'uuid-123',
      nombre: 'Silla Oficina',
      categoria: 'Muebles',
      prioridad: 'Baja',
    },
    {
      internal_id: 'uuid-456',
      nombre: 'Monitor 4K',
      categoria: 'Electrónica',
      prioridad: 'Media',
    },
    {
      internal_id: 'uuid-789',
      nombre: 'Escritorio',
      categoria: 'Muebles',
      prioridad: 'Alta',
    },
    {
      internal_id: 'uuid-000',
      nombre: 'Teclado Mecánico',
      categoria: 'Electrónica',
      prioridad: 'Baja',
    },
    {
      internal_id: 'uuid-456',
      nombre: 'Monitor 4K',
      categoria: 'Electrónica',
      prioridad: 'Media',
    },
    {
      internal_id: 'uuid-789',
      nombre: 'Escritorio',
      categoria: 'Muebles',
      prioridad: 'Alta',
    },
    {
      internal_id: 'uuid-000',
      nombre: 'Teclado Mecánico',
      categoria: 'Electrónica',
      prioridad: 'Baja',
    },
    {
      internal_id: 'uuid-456',
      nombre: 'Monitor 4K',
      categoria: 'Electrónica',
      prioridad: 'Media',
    },
    {
      internal_id: 'uuid-789',
      nombre: 'Escritorio',
      categoria: 'Muebles',
      prioridad: 'Alta',
    },
    {
      internal_id: 'uuid-000',
      nombre: 'Teclado Mecánico',
      categoria: 'Electrónica',
      prioridad: 'Baja',
    },
  ];

  colDefs: ColDef[] = [
    {
      field: 'nombre',
      checkboxSelection: false, // Mantiene el checkbox en esta columna
      flex: 2,
      filterParams: {
        buttons: ['reset', 'apply'], // Añade botones de "Restablecer" y "Aplicar"
        closeOnApply: true,
      },
    },
    {
      field: 'categoria',
      flex: 1,
      filter: SelectFilterComponent, // <--- USAMOS EL COMPONENTE PERSONALIZADO
      filterParams: {
        options: ['Electrónica', 'Muebles'], // Pasamos las opciones al dropdown
      },
    },
    {
      field: 'prioridad',
      flex: 1,
      filter: SelectFilterComponent, // <--- REUTILIZAMOS EL COMPONENTE
      filterParams: {
        options: ['Alta', 'Media', 'Baja'],
      },
    },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  enviarSeleccionados() {
    const nodosSeleccionados = this.gridApi.getSelectedNodes();

    // Extraemos los IDs que NO están en la tabla pero sí en el objeto de datos
    const idsParaEnviar = nodosSeleccionados.map(
      (nodo) => nodo.data.internal_id,
    );

    if (idsParaEnviar.length === 0) {
      alert('No has seleccionado nada.');
      return;
    }

    console.log('Enviando a la API los siguientes IDs:', idsParaEnviar);
    alert(`Se han enviado ${idsParaEnviar.length} IDs. Revisa la consola.`);
  }

  // Método para limpiar TODO
  limpiarTodosLosFiltros() {
    if (this.gridApi) {
      this.gridApi.setFilterModel(null); // Esto borra todos los filtros de golpe
      console.log('Filtros reiniciados');
    }
  }
}
