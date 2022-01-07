import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_URL } from './tokens/api-url.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://acourse-backend.herokuapp.com'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
