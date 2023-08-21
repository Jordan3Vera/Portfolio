import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProfileUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
