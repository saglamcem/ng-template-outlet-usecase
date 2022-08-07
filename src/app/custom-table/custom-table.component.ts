import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './custom-table.component.html',
  styleUrls: [`./custom-table.component.scss`],
})
export class CustomTableComponent {
  @Input() data: any[];
}

@NgModule({
  imports: [CommonModule],
  declarations: [CustomTableComponent],
  exports: [CustomTableComponent],
})
export class CustomTableModule {}
