import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js'; 

@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxTypedJsModule],
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent {

}
