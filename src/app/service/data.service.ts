import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  private urladmin = 'http://127.0.0.1:3100/administrateur/';
  private urlagent = 'http://127.0.0.1:3100/agent/';
  private urlmessages='http://127.0.0.1:3000/messages'
  getallmessages(){
    return this.http.get(this.urlmessages);
  }

  addagent(agent:any){
       return this.http.post(this.urlagent+'ajout',agent);
  }

  deletebycin(cin:any){
  
    return this.http.delete(this.urlagent+'delete/'+cin);
  }
   
  getbycin(cin:any){
    return this.http.get(this.urlagent+'getbycin/'+cin);
  }
  updateagentbycin(cin: any,body:any) {
    return this.http.put(this.urlagent + 'update/' + cin, body);
  }
  getall(){
    return this.http.get(this.urlagent+'all');
  }

  gethost(){
    
   return this.http.get('http://192.168.121.229/nagiosxi/api/v1/objects/hoststatus?apikey=P7gQTfSVuV73DLFVhD25mVsl8bsIOMsSVSkAlsuOGqpTRDUXrAsMhIVlQTJVrQgt&pretty=1')
  }


}
