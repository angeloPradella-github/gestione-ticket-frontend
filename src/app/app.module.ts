import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InserimentoUtenteComponent } from './inserimento-utente/inserimento-utente.component';
import { SchedaUtenteComponent } from './scheda-utente/scheda-utente.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InserimentoTicketFormComponent } from './inserimento-ticket-form/inserimento-ticket-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModificaUtenteModalComponent } from './modifica-utente-modal/modifica-utente-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    InserimentoUtenteComponent,
    SchedaUtenteComponent,
    HomeAdminComponent,
    InserimentoTicketFormComponent,
    ModificaUtenteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
