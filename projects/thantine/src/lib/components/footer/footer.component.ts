import { Component, Input } from '@angular/core';
import { FooterColumn } from '../../models/thantine.model';

@Component({
  selector: 'thantine-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent {
  @Input() copyright: string;
  @Input() footerColumns: FooterColumn[];
}
