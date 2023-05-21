import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [],
})
export class ClasesComponent {
  alerta: string = 'alert-danger';
  loading: boolean = false;

  propiedades: Object = {
    color: false,
  };

  ejecutar() {
    this.loading = true;

    setTimeout(() => (this.loading = false), 3000);
  }
}
