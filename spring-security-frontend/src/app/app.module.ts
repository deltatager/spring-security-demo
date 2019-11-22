import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './_components/login/login.component';
import {PublicComponent} from './_components/public/public.component';
import {PrivateComponent} from './_components/private/private.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UnauthorizedInterceptor} from './_interceptors/UnauthorizedInterceptor';
import {JwtInterceptor} from './_interceptors/JwtInterceptor';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './_components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    PrivateComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
