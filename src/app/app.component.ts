import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'thantine';
import { range } from 'rxjs';
import { map, toArray, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public menuItems: MenuItem[];
  public userMenuItems: MenuItem[];
  public sidebarItems: MenuItem[];

  ngOnInit() {
    range(1, 4).pipe(
      map(num => ({
        text: `Menu Item ${num}`,
        href: `/menu-item-${num}`
      })),
      toArray(),
      tap(items => this.menuItems = items)
    ).subscribe();

    range(1, 6).pipe(
      map(num => ({
        text: `User Item ${num}`,
        href: `/user-item-${num}`
      })),
      toArray(),
      tap(items => this.userMenuItems = items)
    ).subscribe();

    range(1, 20).pipe(
      map(num => ({
        text: `Sidebar Item ${num}`,
        href: `/sidebar-item-${num}`
      })),
      toArray(),
      tap(items => this.sidebarItems = items)
    ).subscribe();
  }
}
