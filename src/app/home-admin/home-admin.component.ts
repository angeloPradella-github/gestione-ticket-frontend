import { Component } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  utenti = [
    {
      nome : "andrea",
      cognome : "rossi",
      password: "pws",
      email: "mail@mail",
      ruolo: "utente"
    },
    {
      nome : "giuseppe",
      cognome : "verdi",
      password: "pws",
      email: "mail@mail",
      ruolo: "admin"
    },
    {
      nome : "roberto",
      cognome : "grandi",
      password: "pws",
      email: "mail@mail",
      ruolo: "utente"
    }
  ]

}
