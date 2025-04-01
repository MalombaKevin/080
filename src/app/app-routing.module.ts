import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component'; 
import { ClientsComponent } from './clients/clients.component';  
import { HubComponent } from './hub/hub.component'; 

const routes: Routes = [

   
    { path: '', component: NavbarComponent,
      children: [
        {path: "", redirectTo: "malwike-technologies", pathMatch: "full"},
        { path: 'malwike-technologies', component: HomeComponent },
        { path: 'services', component: ServicesComponent },
        { path: 'contacts', component: ContactsComponent },
        { path: 'careers', component: CareersComponent },
        { path: 'clients', component:ClientsComponent},
        { path: 'hub', component: HubComponent}
      
      
      ]
     
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
