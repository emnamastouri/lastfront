import { Component } from '@angular/core';
import { AuthentificationService } from '../../../service/authentification.service';
import { DataService } from '../../../service/data.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agentaccount',
  templateUrl: './agentaccount.component.html',
  styleUrl: './agentaccount.component.css'
})
export class AgentaccountComponent {

  agentv = {
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






  agentCIN: string = '';
  agent: any;
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
    this.agentCIN = this._auth.getadmindata().cin;
    this.agentv = {
      cin: this.agentCIN,
      password: ''
    }
    this._data.getbycin(this.agentCIN)
      .subscribe(
        res => {
          this.agent = res;
          console.log(this.agent)
          this.firstname = this.agent.firstname
          this.lastname = this.agent.lastname
          this.email = this.agent.email
          this.password = this.agent.password
          this.image = "http://127.0.0.1:3100/getagentimage/" + this.agent.image
          this.birthday = this.agent.birthday
          this.phone = this.agent.phone
          this.twitter = this.agent.twitter
          this.facebook = this.agent.facebook
          this.linkedin = this.agent.linkedin
          this.instagrame = this.agent.instagrame
          this.bio = this.agent.bio
        }

      )
  }
  imagef: any;
  select(e: any) {
    this.imagef = e.target.files[0] 
  }

  async updategeneral() {

    let fd = new FormData()
    fd.append('firstname', await(this.firstname))
    fd.append('lastname', await(this.lastname))
    fd.append('cin', this.agentCIN)
    fd.append('email', this.email)

    if (this.imagef) {
      fd.append('image', this.imagef)
    }
    else {
      fd.append('image', this.firstname + this.lastname + '.jpeg')
    }
    this._data.updateagentbycin(this.agentCIN, fd)
      .subscribe(
        res => {
          console.log(res)
          this.showSuccesDialog('Profil agent mis à jour avec succès');
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
    this._auth.changepass({ cin: this.agentCIN, password: this.agentv.password, newpassword: this.passe1, newpasswordrepeated: this.passe2 }).subscribe(
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
  changebio(){
    
    let fd = new FormData()
    fd.append('birthday', (this.birthday))
    fd.append('bio', (this.bio))
    fd.append('phone', this.phone)
    fd.append('email', this.email)
    this._data.updateagentbycin(this.agentCIN, fd)
      .subscribe(
        res => {
          console.log(res)
          this.showSuccesDialog('Profil agent mis à jour avec succès');
        },
        err => {
          console.log(err)
          this.showErrorDialog(err)
        }
      )
  }
  changesocial(){
    
    let fd = new FormData()
    fd.append('twitter', this.twitter)
    fd.append('facebook', this.facebook)
    fd.append('linkedin', this.linkedin)
    fd.append('instagrame', this.instagrame)
    this._data.updateagentbycin(this.agentCIN, fd)
      .subscribe(
        res => {
          console.log(res)
          this.showSuccesDialog('Profil agent mis à jour avec succès');
        },
        err => {
          console.log(err)
          this.showErrorDialog(err)
        }
      )
  }
}
