import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const approutes: Routes = [
  { path: '' , component: SigninComponent },
  { path: 'signin' , component: SigninComponent },
  { path: 'signup' , component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
