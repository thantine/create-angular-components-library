import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/thantine.model';

@Component({
  selector: 'thantine-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Input() logoUrl: string;
  @Input() avatarUrl: string;
  @Input() menuItems: MenuItem[];
  @Input() userMenuItems: MenuItem[];

  public shouldShowProfile: boolean;
  public shouldShowMenu: boolean;

  public toggleUserProfile(): void {
    this.shouldShowProfile = !this.shouldShowProfile;
  }

  public toggleMenu(): void {
    this.shouldShowMenu = !this.shouldShowMenu;
  }
}
