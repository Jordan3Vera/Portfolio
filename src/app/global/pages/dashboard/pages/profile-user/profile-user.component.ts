import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit{

  constructor(public auth: AuthService) 
  {}

  profileJson: string | null = null;

  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (user) => {
        this.profileJson = JSON.stringify(user,null,2);
      },
      error: (err) => { throw new Error("Error al mostrar los datos de usuario",err)}
    })
  }
}
