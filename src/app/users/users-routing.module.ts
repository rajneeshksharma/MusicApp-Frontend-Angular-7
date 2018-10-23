import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'artist', component: ArtistComponent, canActivate: [ AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [ AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
RouterModule
  ],
  declarations: []
})
export class UsersRoutingModule { }
