import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-componente.component.html',
  styleUrl: './new-componente.component.scss'
})
export class NewComponente{

}
