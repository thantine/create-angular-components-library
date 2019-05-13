import { Component, OnInit } from '@angular/core';
import { MenuItem, FooterColumn, LoginInfo } from 'thantine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public menuItems: MenuItem[];
  public userMenuItems: MenuItem[];

  public sidebarItems: MenuItem[];

  public footerCopyright: string;
  public footerColumns: FooterColumn[];

  ngOnInit() {

    // Header Inputs data
    this.menuItems = [
      {href: '/menu-item-1', text: 'Menu item 1'},
      {href: '/menu-item-2', text: 'Menu item 2'},
      {href: '/menu-item-3', text: 'Menu item 3'},
    ];

    this.userMenuItems = [
      {href: '/user-item-1', text: 'User item 1'},
      {href: '/user-item-2', text: 'User item 2'},
      {href: '/user-item-3', text: 'User item 3'},
    ];

    // Sidebar Inputs data
    this.sidebarItems = [
      {href: '/sidebar-item-1', text: 'Sidebar item 1'},
      {href: '/sidebar-item-2', text: 'Sidebar item 2'},
      {href: '/sidebar-item-3', text: 'Sidebar item 3'},
    ];


    // Footer Inputs data
    this.footerCopyright = 'Copyright 2019 - thantine. All rights reserved.';
    this.footerColumns = [
      {
        title: 'Column 1',
        menuItems: [
          {href: 'footer-column-1-item-1', text: 'Footer col 1 item 1'},
          {href: 'footer-column-1-item-2', text: 'Footer col 1 item 2'},
          {href: 'footer-column-1-item-3', text: 'Footer col 1 item 3'},
          {href: 'footer-column-1-item-4', text: 'Footer col 1 item 4'}
        ]
      },
      {
        title: 'Column 2',
        menuItems: [
          {href: 'footer-column-2-item-1', text: 'Footer col 2 item 1'},
          {href: 'footer-column-2-item-2', text: 'Footer col 2 item 2'},
          {href: 'footer-column-2-item-3', text: 'Footer col 2 item 3'},
          {href: 'footer-column-2-item-4', text: 'Footer col 2 item 4'}
        ]
      },
      {
        title: 'Column 3',
        menuItems: [
          {href: 'footer-column-3-item-1', text: 'Footer col 3 item 1'},
          {href: 'footer-column-3-item-2', text: 'Footer col 3 item 2'},
          {href: 'footer-column-3-item-3', text: 'Footer col 3 item 3'},
          {href: 'footer-column-3-item-4', text: 'Footer col 3 item 4'}
        ]
      },
      {
        title: 'Column 4',
        menuItems: [
          {href: 'footer-column-4-item-1', text: 'Footer col 4 item 1'},
          {href: 'footer-column-4-item-2', text: 'Footer col 4 item 2'},
          {href: 'footer-column-4-item-3', text: 'Footer col 4 item 3'},
          {href: 'footer-column-4-item-4', text: 'Footer col 4 item 4'}
        ]
      },
    ];
  }

  // Login Output handler
  public handleLogin(loginInfo: LoginInfo): void {
    window.alert(JSON.stringify(loginInfo, null, 4));
  }
}
