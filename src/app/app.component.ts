import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponente } from './components/new-componente/new-componente.component';
import { TemplatesBindingComponent } from './components/template/templates-binding/templates-binding.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponente, TemplatesBindingComponent],
  template: `
  <!--<router-outlet />-->
  <h1>Iniciando Projeto</h1>

  <app-templates-binding/>
 
 
  `,
})
export class AppComponent {}
