import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAgendaComponent } from './components/crear-agenda/crear-agenda.component';
import { ListaAgendaComponent } from './components/lista-agenda/lista-agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAgendaComponent,
    ListaAgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
