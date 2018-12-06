import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/services/auth-guard.service';

const approutes: Routes = [
  { path: '' , component: SigninComponent },
  { path: 'signin' , component: SigninComponent },
  { path: 'signup' , component: SignupComponent },
  { path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
