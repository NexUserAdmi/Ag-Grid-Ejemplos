import { Component, signal } from '@angular/core';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IFilterParams } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';

interface SelectFilterParams extends IFilterParams {
  options: string[];
}

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <div
      style="padding: 10px; display: flex; flex-direction: column; gap: 5px;"
    >
      <div style="font-weight: bold; margin-bottom: 5px;">Filtrar por:</div>
      <select
        [(ngModel)]="selectedValue"
        (change)="onModelChange()"
        style="width: 100%; padding: 4px; border-radius: 4px;"
      >
        <option value="TODOS">Todos</option>
        @for (opt of options; track opt) {
          <option [value]="opt">{{ opt }}</option>
        }
      </select>
    </div>
  `,
})
export class SelectFilterComponent implements IFilterAngularComp {
  params!: IFilterParams;
  options: string[] = [];
  selectedValue = 'TODOS';

  agInit(params: SelectFilterParams): void {
    this.params = params;
    // Extraemos las opciones desde las filterParams de la columna
    this.options = params['options'] || [];
  }

  isFilterActive(): boolean {
    return this.selectedValue !== 'TODOS';
  }

  doesFilterPass(params: any): boolean {
    return params.data[this.params.colDef.field!] === this.selectedValue;
  }

  getModel() {
    return this.isFilterActive() ? { value: this.selectedValue } : null;
  }

  setModel(model: any) {
    this.selectedValue = model ? model.value : 'TODOS';
  }

  onModelChange() {
    this.params.filterChangedCallback();
  }
}
