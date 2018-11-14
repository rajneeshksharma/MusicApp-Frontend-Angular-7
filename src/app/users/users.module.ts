import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ArtistComponent } from './artist/artist.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/layout/breadcrumb/breadcrumb.component';
import { NgSocialModule, AuthServiceConfig, GoogleLoginProvider } from 'ng-social';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../shared/services/auth.guard';
import { LaddaModule } from 'angular2-ladda';
import { DataService } from '../shared/services/data.service';
import {KeyFilterModule} from 'primeng/keyfilter';
import { SongsComponent } from './in/songs/songs.component';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { PlaylistComponent } from './in/playlist/playlist.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ForpassComponent } from './forpass/forpass.component';
import { SearchComponent } from './in/search/search.component';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { EditsongComponent } from './in/editsong/editsong.component';
import {MessageService} from 'primeng/api';
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('953381558791-rta6t6c7je9v28pkhdr7hdtktdi3h70v.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PasswordModule,
    TableModule,
    ToastModule,
    InputTextModule,
    CheckboxModule,
    RatingModule,
    KeyFilterModule,
    DialogModule,
    SliderModule,
    PaginatorModule,
    SelectButtonModule,
    NgSocialModule,
    ListboxModule,
    MultiSelectModule,
    LaddaModule.forRoot({
      style: 'expand-right',
      spinnerSize: 30,
      spinnerColor: 'white',
      spinnerLines: 12,
    })
  ],
  declarations: [
    LoginComponent,
    UserComponent,
    ArtistComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    SignupComponent,
    SafePipe,
    SongsComponent,
    PlaylistComponent,
    ForpassComponent,
    SearchComponent,
    EditsongComponent
  ],
  exports: [
    LoginComponent,
    UserComponent,
    ArtistComponent,
    SignupComponent
  ],
  providers: [MessageService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }, AuthService, AuthGuard, DataService]
})
export class UsersModule { }
