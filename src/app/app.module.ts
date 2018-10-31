import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSocialModule, AuthServiceConfig, GoogleLoginProvider } from 'ng-social';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LaddaModule } from 'angular2-ladda';
import { DataService } from './shared/services/data.service';


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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    LaddaModule
  ],
  exports: [
    RouterModule
],
  providers: [AuthService, AuthGuard, DataService , {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
