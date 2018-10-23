import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'artist', component: ArtistComponent}
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
