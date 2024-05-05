import { Component } from '@angular/core';
import { AuthentificationService } from '../../../service/authentification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private _auth : AuthentificationService , private router :Router) { }
  

  admin={
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
    this._auth.loginadmin(this.admin)
      .subscribe(
        res => {
          this.token = res;
          localStorage.setItem('token', this.token.mytoken);
          this.router.navigate(['/dasboardadmin']);
        },
        err => {
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
  
  // Helper function to extract error message from HttpErrorResponse
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
