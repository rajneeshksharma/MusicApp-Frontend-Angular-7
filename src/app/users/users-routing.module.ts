import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { SongsComponent } from './in/songs/songs.component';
import { PlaylistComponent } from './in/playlist/playlist.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'artist', component: ArtistComponent, canActivate: [ AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [ AuthGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [ AuthGuard]},
  {path: 'songs', component: SongsComponent, canActivate: [ AuthGuard]},
  {path: 'playlist', component: PlaylistComponent, canActivate: [ AuthGuard]},
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
