import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PoFieldModule, PoModule, PoTableComponent, PoTableModule } from '@po-ui/ng-components';


@Component({
  selector: 'table',
  standalone: true,
  imports: [PoTableModule, PoModule, PoFieldModule, ReactiveFormsModule, FormsModule, BrowserModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

}
