import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(public auth: AuthService, 
              @Inject(DOCUMENT) public document: Document, 
              private router: Router)
  {}

  textToType: string = `El desarrollo web es una de las innovaciones <br> más grandes de todos los tiempos. <br/> ¡Aprende y crea con pasión!`;
  currentText: string = "";
  index: number = 0;
  forward: boolean = true;
  completed: boolean = false;

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (!this.completed) {
      if (this.forward && this.index < this.textToType.length) {
        this.currentText += this.textToType.charAt(this.index);
        this.index++;
      } else {
        this.forward = false;
        if (this.currentText.length > 0) {
          setTimeout(() => {
            this.currentText = "";  
          }, 2000);
        } else {
          this.completed = true;
          setTimeout(() => {
            // this.currentText = "";
            this.index = 0;
            this.forward = true;
            this.completed = false;
          }, 2000);
        }
      }
    }

    setTimeout(() => {
      this.typeText();
    }, 70);
  }

  // TODO: Login
  login(){
    this.auth.loginWithRedirect().subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
  
  // TODO: Cerrar sesión
  confirmLogout(){
    const res = confirm("¿Estás seguro que quieres cerrar la sesión?");
    if(res){
      this.logout();
    }
  }

  logout(){
    this.auth.logout({logoutParams: {returnTo: this.document.location.origin}});
  }
}
