import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RezervuarasComponent } from './rezervuaras/rezervuaras.component';
import { FormsModule } from '@angular/forms';
import { PrekesComponent } from './prekes/prekes.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervuarasComponent,
    PrekesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
