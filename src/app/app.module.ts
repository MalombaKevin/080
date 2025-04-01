import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { HubComponent } from './hub/hub.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HubComponent,
  
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    HomeComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  AppComponent: any
}
