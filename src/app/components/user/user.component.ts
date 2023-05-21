import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent {
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe((parametros) => {
      console.log('Ruta padre');
      console.log(parametros);
    });
  }
}
