import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
