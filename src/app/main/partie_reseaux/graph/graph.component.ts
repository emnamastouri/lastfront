
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
  providers: [MessageService],

})
export class GraphComponent {
  all: any = []
  nb_total: any;
  nb_normal: any = 0
  nb_critique: any = 0
  nb_router: any = 0
  nb_pc: any = 0
  showpors = false
  gloabel_addresses: any = []
  services: any = []
  toshow:any=[]

  constructor(public _data: DataService) { }
  fermerpors() {
    this.showpors = false
  }
  openpors(address: any) {
    this.showpors = true
    this.toshow=[]
    for(let item of this.gloabel_addresses){
      if(address==item.name){
        this.toshow=item.pors
      }
    }
  }
  ngOnInit() {
    fetch('http://192.168.121.229/nagiosxi/api/v1/objects/hoststatus?apikey=P7gQTfSVuV73DLFVhD25mVsl8bsIOMsSVSkAlsuOGqpTRDUXrAsMhIVlQTJVrQgt&pretty=1')
      .then(
        (data) => {
          return data.json()

        }
      ).then(
        (objectdata) => {
          this.all = objectdata.hoststatus
          let keys: string[] = Object.keys(this.all);
          const length: number = keys.length
          this.nb_total = length
          console.log(this.all)

          //calcul des autres nomrbres
          for (let item of this.all) {
            if (item.output.includes('OK')) {
              this.nb_normal += 1
            }
            else {
              this.nb_critique += 1
            }
          }
          for (let item of this.all) {
            if (item.icon_image == 'switch.png') {
              this.nb_router += 1
              this.gloabel_addresses.push({name:item.address,pors:[]})

            }
            else {
              this.nb_pc += 1
            }
          } console.log('global names =' + this.gloabel_addresses)
          for (let item of this.all) {

            if (item.icon_image == 'switch.png') {

              item.icon_image = 'assets/' + 'routerimage.png'

            }

            else {
              item.icon_image = 'assets/' + 'pcimage.jpg'

            }

          }
        }
      )


    fetch('http://192.168.121.229/nagiosxi/api/v1/objects/servicestatus?apikey=P7gQTfSVuV73DLFVhD25mVsl8bsIOMsSVSkAlsuOGqpTRDUXrAsMhIVlQTJVrQgt&pretty=1')
      .then(
        (data) => {
          return data.json()
        }
      ).then(
        (objectdata) => {
          this.services = objectdata.servicestatus;
          console.log(this.services)
          for(let host of this.gloabel_addresses){
            for(let item of this.services){
              if(item.host_address==host.name){
                host.pors.push(item)
              }
            }
          }
          console.log(this.gloabel_addresses)

        }
      )

  }

}
