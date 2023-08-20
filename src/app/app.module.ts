import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes 
import { AppRoutingModule } from './app-routing.module';

// Forms 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Auth0 
import { AuthModule } from '@auth0/auth0-angular';

// Main component
import { AppComponent } from './app.component';

// Layouts
import { MainComponent } from './global/layouts/main/main.component';
import { NavbarComponent } from './global/layouts/navbar/navbar.component';
import { FooterComponent } from './global/layouts/footer/footer.component';

// Pages
import { DashboardComponent } from './global/pages/dashboard/dashboard.component';
import { PublicComponent } from './global/public/public.component';
import { ProfileComponent } from './global/pages/profile/profile.component';
import { AboutMeComponent } from './global/pages/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    PublicComponent,
    ProfileComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'portfolio-profile.us.auth0.com',
      clientId: 'IGFhsy9frTkzJgNxYrHP9qLlrVw9C5xi',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
