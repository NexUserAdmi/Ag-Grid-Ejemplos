import { InjectionToken } from '@angular/core';

/*export const GRID_GLOBAL_CONFIG = new InjectionToken('GridGlobalConfig', {
  providedIn: 'root',
  factory: () => ({
    localeText: AG_GRID_LOCALE_ES,
    defaultColDef: {
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
    },
  }),
});*/

export const AG_GRID_LOCALE_ES = {
  // Filtros de Texto / Número / Fecha
  filterOoo: 'Filtrar...',
  equals: 'Igual a',
  notEqual: 'Diferente de',
  blank: 'Vacío',
  notBlank: 'No vacío',
  empty: 'Elegir uno',

  // Filtros de Texto
  contains: 'Contiene',
  notContains: 'No contiene',
  startsWith: 'Empieza con',
  endsWith: 'Termina con',

  // Filtros de Número
  lessThan: 'Menor que',
  greaterThan: 'Mayor que',
  lessThanOrEqual: 'Menor o igual que',
  greaterThanOrEqual: 'Mayor o igual que',
  inRange: 'En un rango',
  inRangeStart: 'Desde',
  inRangeEnd: 'Hasta',

  // Paginación
  page: 'Página',
  more: 'Más',
  to: 'a',
  of: 'de',
  next: 'Siguiente',
  last: 'Último',
  first: 'Primero',
  previous: 'Anterior',
  loadingOoo: 'Cargando...',
  noRowsToShow: 'No hay filas para mostrar',

  // Para selección
  selectAll: '(Seleccionar todo)',
  searchOoo: 'Buscar...',
  blanks: '(Vacíos)',
};

import { ColDef } from 'ag-grid-community';

export const GRID_GLOBAL_CONFIG = {
  // Traducción al español
  localeText: AG_GRID_LOCALE_ES,

  // Ajustes por defecto para todas las columnas
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true,
    filter: true,
    floatingFilter: true,
    filterParams: {
      debounceMs: 500, // Espera medio segundo de silencio antes de disparar el filtro
    },
  } as ColDef,

  // Paginación por defecto
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 20, 50, 100],
};
