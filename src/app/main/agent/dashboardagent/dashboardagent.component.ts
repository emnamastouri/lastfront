import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../service/authentification.service';
import bootstrap from 'bootstrap';


@Component({
  selector: 'app-dashboardagent',
  templateUrl: './dashboardagent.component.html',
  styleUrl: './dashboardagent.component.css'
})
export class DashboardagentComponent {
  my=false;
  tout=false;
  graph=false; 
  chat=true
 
    constructor(private router:Router,public _auth:AuthentificationService) {}
  
    myaccount(){
      this.my=true;
      this.graph=false;
      this.tout=false;
      this.chat=false;
  
  }
  logout(){
    this.router.navigate(['/home'])
    localStorage.removeItem('token')
  }
  voirtout(){
    
    this.my=false;
    this.graph=false;
    this.tout=true;
    this.chat=false;
  
  }
  voirgraph(){
    this.my=false;
      this.graph=true;
      this.tout=false;
      this.chat=false;
  }
  chatting(){
    this.my=false;
      this.graph=false;
      this.tout=false;
      this.chat=true;
  }

}
