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


addv:boolean=false;
voir:boolean=false;
updatev:boolean=false;
supprimerv:boolean=false;
voirall:boolean=false;
my:boolean=false;
chat:boolean=true;

add(){
    this.addv=true;
    this.voir=false;
    this.updatev=false;
    this.supprimerv=false;
    this.voirall=false;
    this.my=false;
    this.chat=false;
}

supprime(){
    this.addv=false;
    this.voir=false;
    this.updatev=false;
    this.supprimerv=true;
    this.voirall=false;
    this.my=false;
    this.chat=false;
}

updater(){
    this.addv=false;
    this.voir=false;
    this.updatev=true;
    this.supprimerv=false;
    this.voirall=false;
    this.my=false;
    this.chat=false;
}

voirr(){
    this.addv=false;
    this.voir=true;
    this.updatev=false;
    this.supprimerv=false;
    this.voirall=false;
    this.my=false;
    this.chat=false;
}
voirtout(){
    this.addv=false;
    this.voir=false;
    this.updatev=false;
    this.supprimerv=false;
    this.voirall=true;
    this.my=false;
    this.chat=false;
}
myaccount(){
    this.addv=false;
    this.voir=false;
    this.updatev=false;
    this.supprimerv=false;
    this.voirall=false;
    this.my=true;
    this.chat=false;

}
chatting(){
    this.addv=false;
    this.voir=false;
    this.updatev=false;
    this.supprimerv=false;
    this.voirall=false;
    this.my=false;
    this.chat=true;

}
logout(){
    this.router.navigate(['/home'])
    localStorage.removeItem('token')
}

}
