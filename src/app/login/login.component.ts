import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  onLogin(email: string, password: string): void {
    this.loginService.login(email, password).subscribe(
      (response: any) => {
        console.log('Risposta dal backend:', response);

        if (response && response.success) {
          const utente = response.utente;
          console.log('Utente loggato:', utente);
          localStorage.setItem('utenteLoggato', JSON.stringify(utente));
        } else {
          console.log('Credenziali non valide ');
        }
      },
      (error: any) => {
        console.error('Errore durante la chiamata:', error);
      }
    );
  }

  onMockedLogin(email: string, password: string) {
    let utenteTrovato = this.loginService.mockedLogin(email, password);
    if (utenteTrovato) {
      console.log('Utente loggato:', utenteTrovato);
      localStorage.setItem('utenteLoggato', JSON.stringify(utenteTrovato));
    } else {
      console.log('Credenziali non valide ');
    }
  }
}
