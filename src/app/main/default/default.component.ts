import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  admin_verif=false;
  agent_verif=true;
   openagentlogin(){
    this.admin_verif=false;
    this.agent_verif=true;
  }

  openadminlogin(){
  this.admin_verif=true;
  this.agent_verif=false;
  }

}
