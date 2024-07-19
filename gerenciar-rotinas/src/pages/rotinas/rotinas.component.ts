import { Component } from '@angular/core';
import { TableComponent } from '../../app/compartilhados/table/table.component';

@Component({
  selector: 'app-rotinas',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './rotinas.component.html',
  styleUrl: './rotinas.component.scss'
})
export class RotinasComponent {
  
}
