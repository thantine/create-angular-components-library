# Overview
This is an angular library of some components, such as:
- Header component
- Sidebar component
- Footer component
- Login component

# Dependencies
- "bootstrap": "^4.3.1"
- "@angular/common": "^7.2.0",
- "@angular/core": "^7.2.0",
- "@angular/forms": "^7.2.0",

# Install
```
npm install --save @thantine/thantine-angular-ui
```
# Usage

## Import module
Import the **ThantineModule** to the AppModule or the module which is need to use the components of the library

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThantineModule } from 'thantine';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThantineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Header Component

### Data binding

**logoUrl**: the url of the logo image. Its type is string

```
@Input() logoUrl: string;
```

**avatarUrl**: the url of the avatar image. Its type is string
```
@Input() avatarUrl: string;
```

**menuItems**: Array of the main menu item.
```
@Input() menuItems: MenuItem[];
```

**userMenuItems**: Array of the user profile menu item
```
@Input() userMenuItems: MenuItem[];
```

### Example

```
// app.component.ts file
public logoUrl = 'assets/images/logo.png';

public avatarUrl = 'assets/images/avatar.png';

public menuItems: MenuItem[] = [
  {href: '/menu-item-1', text: 'Menu item 1'},
  {href: '/menu-item-2', text: 'Menu item 2'},
  {href: '/menu-item-3', text: 'Menu item 3'},
];

public userMenuItems: MenuItem[] = [
  {href: '/user-item-1', text: 'User item 1'},
  {href: '/user-item-2', text: 'User item 2'},
  {href: '/user-item-3', text: 'User item 3'},
];

// app.component.html
<thantine-header
  [logoUrl]="logoUrl"
  [avatarUrl]="avatarUrl"
  [menuItems]="menuItems"
  [userMenuItems]="userMenuItems"
></thantine-header>
```

**Note**: The type **MenuItem** is exported from the library. We can import it from the library to use in the angular app
```
export interface MenuItem {
  href: string;
  text: string;
}

import { MenuItem } from 'thantine';
```

## Sidebar component

### Data binding

**items**: Array of the sidebar item. The type of each item is MenuItem. Please read the HeaderComponent section for more detail.
```
@Input() items: MenuItem[];
```

### Example
```
// app.component.ts
public sidebarItems: MenuItem[] = [
  {href: '/sidebar-item-1', text: 'Sidebar item 1'},
  {href: '/sidebar-item-2', text: 'Sidebar item 2'},
  {href: '/sidebar-item-3', text: 'Sidebar item 3'},
];

// app.component.html
<thantine-sidebar [items]="sidebarItems"></thantine-sidebar>
```

## Footer component
### Data binding

**copyright**: The copy right text
```
@Input() copyright: string;
```

**footerColumns**: The array of footer column. Each column contains a title and an array of footer link item
```
@Input() footerColumns: FooterColumn[];
```

The type FooterColumn is the interface FooterColumn which is exported from the library. We can import it to use in the angular app

```
export interface FooterColumn {
  title: string;
  menuItems: MenuItem[];
}

import { FooterColumn } from 'thantine';
```

### Example
```
// app.component.ts
public footerCopyright = 'Copyright 2019 - thantine. All rights reserved.';

public footerColumns: FooterColumn[] = [
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

// app.component.html
<thantine-footer
  [copyright]="footerCopyright"
  [footerColumns]="footerColumns"
></thantine-footer>
```

## Login component
### Data binding
**login**: The output for handling login event.
```
@Output() login: EventEmitter<LoginInfo> = new EventEmitter<LoginInfo>();
```

The **LoginInfo** is the interface which is exported from the library. We can import it to use in the angular app

```
export interface LoginInfo {
  email: string;
  password: string;
  remembered: boolean;
}

import { LoginInfo } from 'thantine';
```

### Example
```
// app.component.ts
public handleLogin(loginInfo: LoginInfo): void {
    window.alert(JSON.stringify(loginInfo, null, 4));
}

// app.component.html
<thantine-login (login)="handleLogin($event)"></thantine-login>
```
