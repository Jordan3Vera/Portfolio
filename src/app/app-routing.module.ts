import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './global/pages/dashboard/dashboard.component';
import { PublicComponent } from './global/public/public.component';
import { ProfileComponent } from './global/pages/profile/profile.component';
import { AboutMeComponent } from './global/pages/about-me/about-me.component';
import { NotfoundComponent } from './global/pages/notfound/notfound.component';

// Guards 
import { AuthGuard } from './shared/guards/auth.guard';
// import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: PublicComponent, pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'dashboard', loadChildren: () => import('./global/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
