import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../global-variables.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private globalVariablesService: GlobalVariablesService,
    private router: Router
  ) {}

  formReattivo!: FormGroup;

  ngOnInit(): void {
    this.formReattivo = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onLogin(): void {
    if (this.formReattivo.valid) {
      const email = this.formReattivo.get('email')?.value;
      const password = this.formReattivo.get('password')?.value;

      this.loginService.login(email, password).subscribe(
        (response: any) => {
          console.log('Risposta dal backend:', response);

          if (response && response.success) {
            const utente = response.utente;
            console.log('Utente loggato:', utente);
            this.globalVariablesService.updateUtenteLoggato(utente);
            this.formReattivo.reset();
            this.router.navigate(['/']);
          } else {
            console.log('Credenziali non valide');
          }
        },
        (error: any) => {
          console.error('Errore durante la chiamata:', error);
        }
      );
    } else {
      console.log('Form non valido');
    }
  }

  onMockedLogin() {
    if (this.formReattivo.valid) {
      const email = this.formReattivo.get('email')?.value;
      const password = this.formReattivo.get('password')?.value;

      let utenteTrovato = this.loginService.mockedLogin(email, password);
      if (utenteTrovato) {
        console.log('Utente loggato:', utenteTrovato);
        localStorage.setItem('utenteLoggato', JSON.stringify(utenteTrovato));
        this.globalVariablesService.updateUtenteLoggato(utenteTrovato);
        this.formReattivo.reset();
        this.router.navigate(['/']);
      } else {
        console.log('Credenziali non valide ');
      }
    } else {
      console.log('Form non valido');
      this.formReattivo.reset();
    }
  }
}
