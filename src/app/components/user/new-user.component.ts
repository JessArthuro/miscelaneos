import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: ` <p>new-user works!</p> `,
  styles: [],
})
export class NewUserComponent {
  constructor(private router: ActivatedRoute) {
    // Obtenemos los parametros de la ruta padre
    this.router.parent.params.subscribe((parametros) => {
      console.log('Ruta HIJA nuevo usuario');
      console.log(parametros);
    });
  }
}
