import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserimento-utente',
  templateUrl: './inserimento-utente.component.html',
  styleUrls: ['./inserimento-utente.component.css']
})
export class InserimentoUtenteComponent implements OnInit{

  onSubmit(form:any){
    console.log(form)
  }

  onSubmitReactive(){
    console.log(this.aggiungiUtenteForm.value)
  }
  
  aggiungiUtenteForm!: FormGroup;
  
  
  ngOnInit(): void {
    this.aggiungiUtenteForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      ruolo: new FormControl(null, [Validators.required]),
    });
  }

}
