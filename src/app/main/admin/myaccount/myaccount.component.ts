import { Component } from '@angular/core';
import { AuthentificationService } from '../../../service/authentification.service';
import { DataService } from '../../../service/data.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent {
  adminv = {
    cin: '',
    password: ''
  }
  //navigation entr les fenetres

  v_social = false;
  v_info = false;
  v_changepass = false;
  v_generale = true;
  connection() {
    this.v_social = false;
    this.v_info = false;
    this.v_changepass = false;
    this.v_generale = false;
  }
  social() {
    this.v_social = true;
    this.v_info = false;
    this.v_changepass = false;
    this.v_generale = false;
  }
  info() {
    this.v_social = false;
    this.v_info = true;
    this.v_changepass = false;
    this.v_generale = false;
  }
  changepass() {
    this.v_social = false;
    this.v_info = false;
    this.v_changepass = true;
    this.v_generale = false;
  }
  generale() {
    this.v_social = false;
    this.v_info = false;
    this.v_changepass = false;
    this.v_generale = true;

  }






  adminCIN: string = '';
  admin: any;
  firstname: string = ''
  lastname: string = ''
  password: string = ''
  email: string = ''
  image: any;
  birthday: string = ''
  phone: string = ''
  twitter: string = ''
  facebook: string = ''
  linkedin: string = ''
  instagrame: string = ''
  bio: string = ''
  constructor(public _auth: AuthentificationService, public _data: DataService) { }

  showErrorDialog(errorMessage: string): void {
    Swal.fire({
      icon: 'error',
      text: errorMessage,
    });
  }
  showSuccesDialog(successMessage: string): void {
    Swal.fire({
      icon: 'success',
      text: successMessage,
    });
  }
  ngOnInit(): void {
    this.adminCIN = this._auth.getadmindata().cin;
    this.adminv = {
      cin: this.adminCIN,
      password: ''
    }
    this._auth.getadminbyid(this.adminCIN)
      .subscribe(
        res => {
          this.admin = res;
          console.log(this.admin)
          this.firstname = this.admin.firstname
          this.lastname = this.admin.lastname
          this.email = this.admin.email
          this.password = this.admin.password
          this.image = "http://127.0.0.1:3100/getadminimage/" + this.admin.image
          this.birthday = this.admin.birthday
          this.phone = this.admin.phone
          this.twitter = this.admin.twitter
          this.facebook = this.admin.facebook
          this.linkedin = this.admin.linkedin
          this.instagrame = this.admin.instagrame
          this.bio = this.admin.bio
        }

      )
  }
  imagef: any;
  select(e: any) {
    this.imagef = e.target.files[0]
  }

  async updategeneral() {

    let fd = new FormData()
    fd.append('firstname', await (this.firstname))
    fd.append('lastname', await (this.lastname))
    fd.append('cin', this.adminCIN)
    fd.append('email', this.email)

    if (this.imagef) {
      fd.append('image', this.imagef)
    }
    else {
      fd.append('image', this.firstname + this.lastname + '.jpeg')
    }
    this._data.updateadminbycin(this.adminCIN, fd)
      .subscribe(
        res => {
          console.log(res)
          this.showSuccesDialog('Profil administrateur mis à jour avec succès');
        },
        err => {
          console.log(err)
          this.showErrorDialog(err)
        }
      )
  }

  passe1: any
  passe2: any
  changepassword() {
    this._auth.changepassadmin({ cin: this.adminCIN, password: this.adminv.password, newpassword: this.passe1, newpasswordrepeated: this.passe2 }).subscribe(
      (res) => {

        // Perform any additional actions for successful password change
        this.showSuccesDialog('Mot de passe mis à jour avec succés')
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          const errorMessage = this.getErrorMessage(err);

          this.showErrorDialog(errorMessage)
        } else {

          this.showErrorDialog(err)
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
  changebio() {

    let fd = new FormData()
    fd.append('birthday', (this.birthday))
    fd.append('bio', (this.bio))
    fd.append('phone', this.phone)
    fd.append('email', this.email)
    this._data.updateadminbycin(this.adminCIN, fd)
      .subscribe(
        res => {
          console.log(res)
          this.showSuccesDialog('Profil administrateur mis à jour avec succès');
        },
        err => {
          console.log(err)
          this.showErrorDialog(err)
        }
      )
  }
  changesocial() {

    let fd = new FormData()
    fd.append('twitter', this.twitter)
    fd.append('facebook', this.facebook)
    fd.append('linkedin', this.linkedin)
    fd.append('instagrame', this.instagrame)
    this._data.updateadminbycin(this.adminCIN, fd)
      .subscribe(
        res => {
          console.log(res)
          this.showSuccesDialog('Profil administrateur mis à jour avec succès');
        },
        err => {
          console.log(err)
          this.showErrorDialog(err)
        }
      )
  }
}
