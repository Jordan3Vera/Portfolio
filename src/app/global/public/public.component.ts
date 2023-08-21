import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit{

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(!isAuthenticated){
        this.router.navigate(['']);
      }else{
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
