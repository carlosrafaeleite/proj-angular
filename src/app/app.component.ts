import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <!--<router-outlet />-->
  <h1>Iniciando Projeto</h1>
  <h2>Testa ndo a primeira pagina</h2>
  `,
})
export class AppComponent {}
