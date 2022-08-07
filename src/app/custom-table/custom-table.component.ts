import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  NgModule,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './custom-table.component.html',
  styleUrls: [`./custom-table.component.scss`],
})
export class CustomTableComponent {
  @Input() data: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
}

@NgModule({
  imports: [CommonModule],
  declarations: [CustomTableComponent],
  exports: [CustomTableComponent],
})
export class CustomTableModule {}
