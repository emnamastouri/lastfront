import { Component } from '@angular/core';
import { AuthentificationService } from '../../../service/authentification.service';
import { DataService } from '../../../service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agentaccount',
  templateUrl: './agentaccount.component.html',
  styleUrl: './agentaccount.component.css'
})
export class AgentaccountComponent {
  agentCIN: string = '';
  agent:any;
  firstname:string=''
  lastname:string=''
  password:string=''
  cin:string=''
  email:string=''
  image:any;
  constructor(public _auth:AuthentificationService,public _data:DataService) { }
 
  showErrorDialog(errorMessage: string): void {
    Swal.fire({
      icon: 'error',
      title: 'erreur !',
      text: errorMessage,
    });
  }
  ngOnInit(): void {
    this.agentCIN= this._auth.getadmindata().cin;
    this._data.getbycin(this.agentCIN)
    .subscribe(
      res=>{
        this.agent=res;
        console.log(this.agent)
        this.firstname=this.agent.firstname
        this.lastname=this.agent.lastname
        this.email=this.agent.email
        this.password=this.agent.password
        this.image="http://127.0.0.1:3100/getagentimage/"+this.agent.image
  
      }
       
    )
  }
}
