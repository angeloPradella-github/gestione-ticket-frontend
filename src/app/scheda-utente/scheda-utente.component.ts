import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-scheda-utente',
  templateUrl: './scheda-utente.component.html',
  styleUrls: ['./scheda-utente.component.css']
})
export class SchedaUtenteComponent implements OnInit{
  datiUtente = [ //ipotetici dati dal localstorage
    {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@gmail.com'
    }
  ];

  formNuovoTicket!: FormGroup;

  ngOnInit(): void {
    this.formNuovoTicket = new FormGroup({
      descrizione: new FormControl(null, Validators.required),
      data_inserimento: new FormControl(null, Validators.required),
      tipologia: new FormControl(null, Validators.required),
    });
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
  
      const nuovoTicket = {
        id: (this.datiTicketsAttivi.length + 1).toString(),
        descrizione: descrizione,
        data_inserimento: data,
        data_chiusura: 'null',
        tipologia: tipologia
      };
  
      this.datiTicketsAttivi.push(nuovoTicket);
      // Optionally, you might reset the form after successful submission
      this.formNuovoTicket.reset();
    } else {
      console.log('Error: Form validation failed. Please check the form fields.');
    }
  }

}
