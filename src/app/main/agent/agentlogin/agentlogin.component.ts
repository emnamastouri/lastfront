import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../../../service/authentification.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.component.html',
  styleUrl: './agentlogin.component.css'
})
export class AgentloginComponent {
  constructor(private _auth : AuthentificationService , private router :Router) { }
  agent={
    cin: '',
    password: ''
   }
 

 
//fonction d'affichage d'un dialogue d'erreur

showErrorDialog(errorMessage: string): void {
  Swal.fire({
    icon: 'error',
    text: errorMessage,
  });
}

token:any;
   //fonction que permet de controler les inputs
  login() {
   
      this._auth.loginagent(this.agent)
      .subscribe(
        res=>{
           this.token =res;
           localStorage.setItem('token',this.token.mytoken)
           this.router.navigate(['/dashboardagent'])
        },
        err=>{
          if (err instanceof HttpErrorResponse) {
            // Handle HTTP errors specifically
            const errorMessage = this.getErrorMessage(err);
            this.showErrorDialog(errorMessage);
          } else {
            // Handle other types of errors (e.g., network errors)
            console.error('Unexpected error:', err);
          }
        }
      );
    }

    private getErrorMessage(error: HttpErrorResponse): string {
      if (error.error) {
        if (typeof error.error === 'string') {
          return error.error; // String error
        } else if (typeof error.error === 'object') {
          return error.error.error || 'Unknown error'; // Access specific error message if present, fallback to generic message
        }
      }
      return 'An error occurred during login.'; // Default message if no error information is available
    }   


}
