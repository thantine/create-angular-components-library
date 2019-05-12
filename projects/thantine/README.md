## Create new angular project

```
ng new demo-app
```

```
cd demo-app
```

```
npm install --save bootstrap
npm install --save @thantine/thantine-angular-ui@latest
```

## Add bootstrap to angular project by modifying the styles section in angular.json

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

## Usage

- app.module.ts

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThantineModule } from '@thantine/thantine-angular-ui';

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

- app.component.ts

```
import { Component } from '@angular/core';

import { MenuItem } from '@thantine/thantine-angular-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public avatarUrl = 'assets/images/avatar.png';
  public logoUrl = 'assets/images/logo.png';

  public menuItems: MenuItem[] = [
    {href: '/menu-item-1', text: 'Menu item 1'},
    {href: '/menu-item-2', text: 'Menu item 2'},
  ];

  public userMenuItems: MenuItem[] = [
    {href: '/user-item-1', text: 'user item 1'},
    {href: '/user-item-2', text: 'user item 2'},
  ];

  public sidebarItems: MenuItem[] = [
    {href: '/sidebar-item-1', text: 'sidebar item 1'},
    {href: '/sidebar-item-2', text: 'sidebar item 2'},
  ];
}
```

- app.component.html

```
<thantine-header
  [logoUrl]="logoUrl"
  [avatarUrl]="avatarUrl"
  [menuItems]="menuItems"
  [userMenuItems]="userMenuItems"
></thantine-header>

<main class="main__content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-2 bg-dark">

        <thantine-sidebar [items]="sidebarItems"></thantine-sidebar>

      </div>

      <div class="col-12 col-lg-10">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-3">

            <thantine-login></thantine-login>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<thantine-footer></thantine-footer>
```
