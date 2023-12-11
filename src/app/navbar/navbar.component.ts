import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../logout.service';
import { GlobalVariablesService } from '../global-variables.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  utenteLoggato: any = null;
  showLogout = false;

  constructor(
    private globalVariablesService: GlobalVariablesService,
    private logoutService: LogoutService
  ) {}

  ngOnInit(): void {
    this.globalVariablesService.isLogged$.subscribe((value: boolean) => {
      this.isLogged = value;
    });

    this.globalVariablesService.utenteLoggato$.subscribe((value: any) => {
      this.utenteLoggato = value;
    });
  }

  logout() {
    this.logoutService.logout();
    this.showLogout = false;
  }
}
