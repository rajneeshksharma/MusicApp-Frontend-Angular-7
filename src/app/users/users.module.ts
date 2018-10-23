import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ArtistComponent } from './artist/artist.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [
    LoginComponent,
    UserComponent,
    ArtistComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent
  ],
  exports: [
    LoginComponent,
    UserComponent,
    ArtistComponent
  ]
})
export class UsersModule { }
