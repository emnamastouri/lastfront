/*import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {
  parent:any=[];
  otherhosts:any=[];
  localhost:any=[]
  all:any;
  compare:any;
  par:any
  ngOnInit(): void {
    fetch('http://192.168.121.229/nagiosxi/api/v1/objects/hoststatus?apikey=P7gQTfSVuV73DLFVhD25mVsl8bsIOMsSVSkAlsuOGqpTRDUXrAsMhIVlQTJVrQgt&pretty=1')
    .then(
      (data)=>{
        return data.json()
      }
    ).then(
      (objectdata)=>{
        this.all=objectdata.hoststatus
        for(let item of this.all){
          
          if(item.output.includes('OK')){
            item.display_name='#35ff3c57'}
            else{
              item.display_name='rgba(255, 13, 0, 0.426)'
            }
        }
        for(let item of this.all){
          
          if(item.address=='127.0.0.1'){
            this.localhost.push(item)
          }
          else if(item.icon_image=='switch.png'){
            this.parent.push(item)
            item.icon_image='routerimage.png'

          }
          
          else{
            item.icon_image='pcimage.png'
            this.otherhosts.push(item)
          }

        }
        console.log(this.parent)
        console.log(this.otherhosts)
        console.log(this.localhost)
        //this.localhost=Object.values(this.localhost)

      }
    )







    
  }


  extract(items:string) {
    
    const blocks = items.split('.');
    if (blocks.length >= 3) {
      this.compare= blocks.slice(0, 3).join('.');
      console.log(this.compare)
      return this.compare

    }
  }

}
*/



import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
    providers: [MessageService],
    
})
export class GraphComponent { 
    data1: TreeNode[]=[];

    data2: TreeNode[]=[];

    selectedNode!: TreeNode;
    data3=this._data.getHosts()

    constructor(private messageService: MessageService,public _data:DataService) {}

    ngOnInit() {
    }
    onNodeSelect(event: any) {
        this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
    }
}
