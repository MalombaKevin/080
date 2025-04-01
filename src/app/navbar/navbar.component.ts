import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CareersComponent } from '../careers/careers.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent, CareersComponent, ContactsComponent, ServicesComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
