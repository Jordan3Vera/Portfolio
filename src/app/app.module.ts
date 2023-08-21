import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Interceptors
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

// Forms 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Auth0 
import { AuthModule } from '@auth0/auth0-angular';

// Main component
import { AppComponent } from './app.component';

// DashboardModule
import { DashboardModule } from './global/pages/dashboard/dashboard.module';

// Enviroments
import { environment as env } from 'src/environments/environment';

// Layouts
import { MainComponent } from './global/layouts/main/main.component';
import { NavbarComponent } from './global/layouts/navbar/navbar.component';
import { FooterComponent } from './global/layouts/footer/footer.component';

// Pages
import { PublicComponent } from './global/public/public.component';
import { ProfileComponent } from './global/pages/profile/profile.component';
import { AboutMeComponent } from './global/pages/about-me/about-me.component';
import { NotfoundComponent } from './global/pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    PublicComponent,
    ProfileComponent,
    AboutMeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'portfolio-profile.us.auth0.com',
      clientId: 'IGFhsy9frTkzJgNxYrHP9qLlrVw9C5xi',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      authorizationParams: {
        redirect_uri: window.location.origin
      },

      httpInterceptor: {
        allowedList: [
          // *Adjunte tokens de acceso a cualquier llamada a '/api' (coincidencia exacta)
          '/api',

          // *Adjunte tokens de acceso a cualquier llamada que comience con '/api/'
          '/api/*',

          // *Haga coincidir cualquier cosa que comience con /api/accounts, pero también especifique la audiencia y el alcance del adjunto
          // *el token de acceso debe tener
          // {
          //   uri: '/api/accounts/*',
          //   tokenOptions: {
          //     authorizationParams: {
          //       audience: 'http://my-api/',
          //       scope: 'read:accounts',
          //     }
          //   },
          // },
    
          // // Matching on HTTP method
          // {
          //   uri: '/api/orders',
          //   httpMethod: 'post',
          //   tokenOptions: {
          //     authorizationParams: {
          //       audience: 'http://my-api/',
          //       scope: 'write:orders',
          //     }
          //   },
          // },
    
          // // Using an absolute URI
          // {
          //   uri: 'https://your-domain.auth0.com/api/v2/users',
          //   tokenOptions: {
          //     authorizationParams: {
          //       audience: 'https://your-domain.com/api/v2/',
          //       scope: 'read:users',
          //     }
          //   },
          // }
        ]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
