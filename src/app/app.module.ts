import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LaddaModule } from 'angular2-ladda';
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
    SlimLoadingBarModule,
    BrowserAnimationsModule,
    LaddaModule.forRoot({
      style: "expand-right",
      spinnerSize: 30,
      spinnerColor: "blue",
      spinnerLines: 12,
  })
  ],
  exports: [
    RouterModule
],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
