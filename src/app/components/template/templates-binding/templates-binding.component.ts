import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-templates-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './templates-binding.component.html',
  styleUrl: './templates-binding.component.scss'
})
export class TemplatesBindingComponent {

  public name  = 'carlos Rafael';
  public idade  = 48;


}
