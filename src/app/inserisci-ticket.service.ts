import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InserisciTicketService {

  private apiUrl = '/api/tickets';

  constructor(private http:HttpClient) { }

  aggiungiNuovoTicket(descrizione: string, data: string, tipologia: string): Observable<any> {
    const nuovoTicket = {
      descrizione: descrizione,
      data_inserimento: data,
      data_chiusura: null, // Imposta null per data_chiusura, poiché il ticket è appena stato creato
      tipologia: tipologia
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.apiUrl, nuovoTicket, httpOptions);
  }
}

