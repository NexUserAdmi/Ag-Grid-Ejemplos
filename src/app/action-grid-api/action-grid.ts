import {
  Component,
  signal,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  themeQuartz,
  GridApi,
  GridReadyEvent,
  ValueFormatterParams,
  RowSelectionOptions,
} from 'ag-grid-community';
import { SelectFilterComponent } from '../components/select-filter.component';
import { GRID_GLOBAL_CONFIG } from '../locale.es';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-action-grid-api',
  standalone: true,
  imports: [AgGridAngular],
  template: `
    <div style="margin-bottom: 40px;">
      <h3>7. Filtros controlados por API (JSONPlaceholder)</h3>

      @if (cargando()) {
        <p style="color: blue;">⌛ Consultando a la API...</p>
      }

      <div style="height: 400px; width: 100%;">
        <ag-grid-angular
          style="width: 100%; height: 100%;"
          [theme]="theme"
          [rowData]="usuarios()"
          [columnDefs]="colDefs"
          (gridReady)="onGridReady($event)"
          (filterChanged)="onFilterChanged()"
          [localeText]="gridOptions.localeText"
          [defaultColDef]="gridOptions.defaultColDef"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionGridApi {
  private http = inject(HttpClient); // Inyectamos el servicio
  usuarios = signal<any[]>([]); // Signal para los datos
  cargando = signal(false); // Estado de carga

  private gridApi!: GridApi;
  theme = themeQuartz;
  gridOptions = GRID_GLOBAL_CONFIG;

  colDefs: ColDef[] = [
    { field: 'id', width: 80 },
    { field: 'name', headerName: 'Nombre', filter: 'agTextColumnFilter' },
    { field: 'username', headerName: 'Usuario' },
    {
      field: 'email',
      filter: SelectFilterComponent,
      filterParams: {
        options: [
          'Sincere@april.biz',
          'Shanna@melissa.tv',
          'Nathan@yesenia.net',
        ],
      },
    },
  ];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.cargarDatosDeApi(); // Carga inicial
  }

  // Este método se dispara cada vez que el usuario toca un filtro
  onFilterChanged() {
    const filtros = this.gridApi.getFilterModel();
    console.log('Filtros activos para la API:', filtros);

    // Aquí simulamos la llamada con parámetros
    // En una API real harías: this.http.get(`api/users?name=${filtros.name.filter}`)
    this.cargarDatosDeApi(filtros);
  }

  cargarDatosDeApi(filtros?: any) {
    this.cargando.set(true);

    // JSONPlaceholder no filtra por todos los campos, pero simulamos la URL
    let url = 'https://jsonplaceholder.typicode.com/users';

    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        // Simulamos el filtrado del lado del servidor para el ejemplo
        if (filtros && filtros.name) {
          data = data.filter((u) =>
            u.name.toLowerCase().includes(filtros.name.filter.toLowerCase()),
          );
        }

        this.usuarios.set(data);
        this.cargando.set(false);
      },
      error: () => this.cargando.set(false),
    });
  }
}
