import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http: HttpClient) { }
  
  private urlagent = 'http://127.0.0.1:3100/agent/';
  private urladmin = 'http://127.0.0.1:3100/administrateur/';


getadminbyid(cin:any){
  return this.http.get(this.urladmin+'getbycin/'+cin);
}


loginadmin(admin:any){
  return this.http.post(this.urladmin+'login',admin);
}
loginagent(agent:any){
  return this.http.post(this.urlagent+'login',agent);
}
isloggedin(){
  let token =localStorage.getItem('token');
  if(token){
    return true;
  }
  else{
    return false;
  }
}

getadmindata(){
  let token =localStorage.getItem('token');
  if(token){
    let data= JSON.parse(window.atob(token.split('.')[1]))
    return data;
  }
}

}
