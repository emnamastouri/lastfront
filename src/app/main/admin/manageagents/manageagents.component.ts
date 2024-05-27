import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../../service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageagents',
  templateUrl: './manageagents.component.html',
  styleUrl: './manageagents.component.css'
})
export class ManageagentsComponent {
  cinwanted=''
  wanted:any
 showForm = true;
 showagent=false;
 adduser=false;
 showimage=false

 saveedit(item: any) {
  let fd = new FormData()
  fd.append('firstname', item.newfirstname)
  fd.append('lastname', item.newlastname)
  fd.append('password', item.newpassword)
  fd.append('email', item.newemail)
  fd.append('birthday', item.newbirthday)
  this._data.updateagentbycin(item.cin, fd)
    .subscribe(
      res => {
        console.log(res)
        this.showSuccessDialog('Agent ' + item.newfirstname + ' mis à jour avec succée');
        // Update the original properties with the new values
        item.firstname = item.newfirstname;
        item.lastname = item.newlastname;
        item.email = item.newemail;
        item.birthday = item.newbirthday;
      },
      err => {
        console.log(err)
        this.showErrorDialog(err)
      }
    )
}
 edit(item: any) {
  item.isEditing = true;
  item.newfirstname = item.firstname;
  item.newlastname = item.lastname;
  item.newemail = item.email;
  item.newbirthday = item.birthday;
}
 deleteagent(cin: any){
  this._data.deletebycin(cin)
.subscribe(
  res=>{
   
    console.log(res)
    location.reload();

  },
  err=>{
    console.log(err);
    this.showErrorDialog(err)

  }
  
)


}
 save(){
  this.adduser=false
  this.add()
  location.reload();
 }
 addagent(){
  this.adduser=true
 }
 fermer(){
  this.showagent=false;
 }
 fermerimage()
{
  this.showimage=false
}
   rechercher() {
  
  if(this.cinwanted==null){
    this.showErrorDialog("Merci d'entrée la cin de l'agent rechercher")
  }
  else{
    this._data.getbycin(this.cinwanted)
    .subscribe(
      res=>{
        this.showagent = true;
       this.wanted=res
        this.wanted.image="http://127.0.0.1:3100/getagentimage/"+this.wanted.image
        console.log(res)

      },
      err=>{
        console.log(err);
        this.showErrorDialog('')

      }
    )
  }
}

getimage(cin: any){
  this.showimage=true
  this._data.getbycin(cin)
    .subscribe(
      res=>{
       this.wanted=res
        this.wanted.image="http://127.0.0.1:3100/getagentimage/"+this.wanted.image
        console.log(res)

      },
      err=>{
        console.log(err);
        this.showErrorDialog('')

      }
    )
}








add() {
  if(this.agent.firstname=='' && this.agent.lastname==''&&this.agent.password==''&&this.agent.email==''&&this.agent.birthday=='' ){ 
    console.log("merci d'entree les information")
  }
  else{
  let fd =new FormData()
  fd.append('firstname',this.agent.firstname)
  fd.append('lastname',this.agent.lastname)
  fd.append('password',this.agent.password)
  fd.append('cin',this.agent.cin)
  fd.append('email',this.agent.email)
  fd.append('image',this.image)
  fd.append('birthday',this.agent.birthday)
  
  this._data.addagent(fd)
  .subscribe(
    res=>{
      this.showSuccessDialog('agent ajouté avec succée')
    },
    err=>{
      console.log(err);
      this.showErrorDialog('')
    }
  )
}
  
}
showErrorDialog(errorMessage: string): void {
  Swal.fire({
    icon: 'error',
    title: 'erreur !',
    text: errorMessage,
  });
}
showSuccessDialog(message: string): void {
  Swal.fire({
    icon: 'success',
    title: 'Bien!',
    text: message,
  });
}
  agents:any;
  l:any
  nr:any
  agent={
    firstname:'',
    lastname:'',
    cin: '',
    email:'',
    password: '',
    birthday:'',
    newfirstname:'',
    newlastname:'',
    newemail:'',
    newpassword: '',
    newbirthday:''
   } 
   image:any;
   select(e:any){
    this.image=e.target.files[0];
   }
  constructor(private _data:DataService) { }

  ngOnInit(): void {

    this._data.getall()
    .subscribe(
      res=>{
        this.agents=res;
        console.log(this.agents)

      },
      err=>{
        console.log(err)
      }
    )
   
  }
}