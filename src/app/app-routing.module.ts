import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InserimentoUtenteComponent } from './inserimento-utente/inserimento-utente.component';
import { SchedaUtenteComponent } from './scheda-utente/scheda-utente.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InserimentoTicketFormComponent } from './inserimento-ticket-form/inserimento-ticket-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/inserimento-utente', component: InserimentoUtenteComponent },
  { path: 'scheda-utente/:id', component: SchedaUtenteComponent },
  { path: 'admin', component: HomeAdminComponent },
  { path: 'inserimento-ticket', component: InserimentoTicketFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
