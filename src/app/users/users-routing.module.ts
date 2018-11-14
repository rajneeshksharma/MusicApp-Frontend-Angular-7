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
import { ForpassComponent } from './forpass/forpass.component';
import { SearchComponent } from './in/search/search.component';
import { EditsongComponent } from './in/editsong/editsong.component';

const routes: Routes = [
  { path: '',
  children: [
  { path: '', component:  LoginComponent, },
  { path: 'artist', component: ArtistComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'songs', component: SongsComponent, canActivate: [AuthGuard] },
  { path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuard] },
  { path: 'forpass', component: ForpassComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: 'editsong', component: EditsongComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent}
  ]}
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
