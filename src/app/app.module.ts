import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './modules/core/core.module';
import { HttpRequestsInterceptor } from './modules/core/interceptors/http-requests.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { API_URL } from "./shared/injection-tokens/api-url";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
