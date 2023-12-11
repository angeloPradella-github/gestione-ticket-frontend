import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InserisciTicketService } from '../inserisci-ticket.service';



@Component({
  selector: 'app-scheda-utente',
  templateUrl: './scheda-utente.component.html',
  styleUrls: ['./scheda-utente.component.css']
})
export class SchedaUtenteComponent implements OnInit{
  
  datiUtente: any;
  
  constructor(private InserisciTicketService: InserisciTicketService) {}
  
  formNuovoTicket!: FormGroup;
  
  ngOnInit(): void {
    this.formNuovoTicket = new FormGroup({
      descrizione: new FormControl(null, Validators.required),
      data_inserimento: new FormControl(null, Validators.required),
      tipologia: new FormControl(null, Validators.required),
    });


        const userData = localStorage.getItem('utenteLoggato');
        if (userData) {
          // Converte la stringa JSON in un oggetto JavaScript
          this.datiUtente = JSON.parse(userData);
        } else {
          console.log('Nessun dato utente trovato nella Local Storage');
        }
  }

  datiTicketsAttivi = [ //ipotetici dati dalla select * from ticket dell'utente where data_chiusua = null 
    {
      id: '22',
      descrizione: 'Ho avuto un problema con il ripristino della mia password',
      data_inserimento: '22/03/2023',
      tipologia:"assistenza software"
    },
    {
      id: '56',
      descrizione: 'Non riesco a trovare la pagina dei contatti',
      data_inserimento: '22/03/2023',
      tipologia:"assistenza"
    }
  ];

  datiTicketsRisolti = [ //ipotetici dati dalla select * from ticket dell'utente where data_chiusua != null 
    {
      id: '22',
      descrizione: 'Ho avuto un problema con il ripristino della mia password, quando provo clicco il pulsante non funziona niente',
      data_inserimento: '22/03/2023',
      data_chiusura: '25/06/2023',
      tipologia:"assistenza software"
    },
    {
      id: '56',
      descrizione: 'Ho avuto un problema con il ripristino della mia password, quando provo clicco il pulsante non funziona niente',
      data_inserimento: '22/03/2023',
      data_chiusura: '25/06/2023',
      tipologia:"assistenza"
    }
  ];



  aggiungiNuovoTicket(): void {
    if (this.formNuovoTicket.valid) {
      const descrizione = this.formNuovoTicket.get('descrizione')?.value;
      const data = this.formNuovoTicket.get('data_inserimento')?.value;
      const tipologia = this.formNuovoTicket.get('tipologia')?.value;

      this.InserisciTicketService.aggiungiNuovoTicket(descrizione, data, tipologia).subscribe(
        (response: any) => {
          // Gestisci la risposta del server se necessario
          console.log('Ticket aggiunto con successo:', response);
        },
        (error: any) => {
          console.error('Errore durante l\'aggiunta del ticket:', error);
        }
      );

      // Reset del form dopo l'invio del ticket
      this.formNuovoTicket.reset();
    } else {
      console.log('Errore: la validazione del form non è passata. Controlla i campi del form.');
    }
  }

}
