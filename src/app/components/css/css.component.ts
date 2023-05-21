import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template: ` <p class="mt-2">Aplicando CSS a un solo componente.</p> `,
  styles: [
    `
      p {
        color: red;
        font-size: 20px;
      }
    `,
  ],
})
export class CssComponent {}
