import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/thantine.model';

@Component({
  selector: 'thantine-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() items: MenuItem[];
}
