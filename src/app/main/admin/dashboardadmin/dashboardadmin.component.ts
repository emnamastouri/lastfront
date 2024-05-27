import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../service/authentification.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrl: './dashboardadmin.component.css'
})
export class DashboardadminComponent {
  
constructor(private router:Router,public _auth:AuthentificationService) { }


tout=false;
graph=false;
my:boolean=false;
chat:boolean=false;
manage:boolean=true;
voirtout(){
    
    this.my=false;
    this.graph=false;
    this.tout=true;
    this.chat=false;
    this.manage=false;
  
  }
  voirgraph(){
    this.my=false;
      this.graph=true;
      this.tout=false;
      this.chat=false;
      this.manage=false;
  }

myaccount(){

    this.my=true;
    this.chat=false;
    this.manage=false;

}
chatting(){

    this.my=false;
    this.chat=true;
    this.manage=false;

}
manageagents(){
    this.my=false;
    this.chat=false;
    this.manage=true;
}
logout(){
    this.router.navigate(['/home'])
    localStorage.removeItem('token')
}

}
