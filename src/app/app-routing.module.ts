import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './global/pages/dashboard/dashboard.component';
import { PublicComponent } from './global/public/public.component';
import { ProfileComponent } from './global/pages/profile/profile.component';
import { AboutMeComponent } from './global/pages/about-me/about-me.component';
import { NotfoundComponent } from './global/pages/notfound/notfound.component';

// Guards 
import { AuthGuard } from './shared/guards/auth.guard';
import { MainComponent } from './global/layouts/main/main.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: PublicComponent, pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
