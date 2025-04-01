import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { GreetingPipe } from '../greeting.pipe';
import { RouterModule } from '@angular/router';

import { NgxTypedJsModule } from 'ngx-typed-js'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent,
    DatePipe,
    GreetingPipe,
    NgxTypedJsModule,
    RouterModule
  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
doSmth() {
throw new Error('Method not implemented.');
}
 
dateToday = new Date
greeting: string|undefined;



}
