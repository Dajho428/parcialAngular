import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import {APP_ROUTING} from "./app.routes";
import {FormsModule} from "@angular/forms";
import { FormConversorComponent } from './components/form-conversor/form-conversor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParqueaderoComponent,
    ConversorComponent,
    FormConversorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
