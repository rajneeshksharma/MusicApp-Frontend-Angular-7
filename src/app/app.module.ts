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
import { LaddaModule } from 'angular2-ladda';
import { DataService } from './shared/services/data.service';
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
  providers: [AuthService, AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
