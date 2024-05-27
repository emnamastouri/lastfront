import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private urladmin = 'http://127.0.0.1:3100/administrateur/';
  private urlagent = 'http://127.0.0.1:3100/agent/';
  private urlmessages = 'http://127.0.0.1:3000/messages'
  getallmessages() {
    return this.http.get(this.urlmessages);
  }

  addagent(agent: any) {
    return this.http.post(this.urlagent + 'ajout', agent);
  }

  deletebycin(cin: any) {

    return this.http.delete(this.urlagent + 'delete/' + cin);
  }

  getbycin(cin: any) {
    return this.http.get(this.urlagent + 'getbycin/' + cin);
  }
  updateagentbycin(cin: any, body: any) {
    return this.http.put(this.urlagent + 'update/' + cin, body);
  }
  getall() {
    return this.http.get(this.urlagent + 'all');
  }
  updateadminbycin(cin: any, body: any) {
    return this.http.put(this.urladmin + 'update/' + cin, body);
  }





















  public getHosts(): TreeNode[] {
    let treeData: TreeNode[] = [];
    let compare = "";
    let nodes: TreeNode[] = []

    function fetchdata() {
      console.log("fetched")
      return fetch('http://192.168.121.229/nagiosxi/api/v1/objects/hoststatus?apikey=P7gQTfSVuV73DLFVhD25mVsl8bsIOMsSVSkAlsuOGqpTRDUXrAsMhIVlQTJVrQgt&pretty=1')
    }
    const interval = setInterval(fetchdata, 5000);

    fetchdata()
      .then(response => response.json())
      .then(data => {
        const allHosts = data.hoststatus;
        console.log(allHosts);

        for (let item of allHosts) {
          if (item.address === '127.0.0.1') {
            treeData.push({
              label: item.display_name,
              expanded: true,
              data: { name: 'Walter White', 'avatar': 'walter.jpg' },
              children: []
            });
          }
        };
        for (let item of allHosts) {
          if (item.icon_image === 'switch.png') {
            const node = {
              label: item.display_name,
              expanded: true,
              data: { name: 'Walter White', 'avatar': 'walter.jpg' },
              children: []
            }
            nodes.push(node)
            for (let element of allHosts) {
              const blocks = item.address.split('.');
              if (blocks.length >= 3) {
                compare = blocks.slice(0, 3).join('.');
              }
              if (element.address.includes(compare) && element.address != item.address) {
                const noded = {
                  label: element.display_name,
                  expanded: true,
                  data: { name: 'Walter White', 'avatar': 'walter.jpg' },
                  children: []
                }
                nodes[nodes.length-1].children?.push(noded)
              }
            }
          }
        }
        

        treeData[0].children?.push(...nodes)
        console.log(treeData)

      })

    return treeData;
  }


  async voirHosts() :Promise<object[]> {
    let compare = "";
    const fetchData = async () => {
      console.log("fetched");
      const response = await fetch('http://192.168.121.229/nagiosxi/api/v1/objects/hoststatus?apikey=P7gQTfSVuV73DLFVhD25mVsl8bsIOMsSVSkAlsuOGqpTRDUXrAsMhIVlQTJVrQgt&pretty=1');
      return response.json();
    };
  
    const interval = setInterval(fetchData, 5000);
  
    const data = await fetchData();
    const allHosts = data.hoststatus;
    console.log(allHosts);
  
    const hosts: object[] = [];
  
    for(let item of allHosts) {
      if (item.address === '127.0.0.1' || item.icon_image === 'witch.png') {
        hosts.push({ Name: '127.0.0.1' ,ReportingPerson:"" });
      }
    };
    for (let item of allHosts) {
      if (item.icon_image === 'switch.png') {
        const node = {
          Name: item.display_name,
          ReportingPerson:"127.0.0.1 "
        }
        hosts.push(node)
        for (let element of allHosts) {
          const blocks = item.address.split('.');
          if (blocks.length >= 3) {
            compare = blocks.slice(0, 3).join('.');
          }
          if (element.address.includes(compare) && element.address != item.address) {
            const noded = {
              Name: element.display_name,
              ReportingPerson:item.display_name
            }
            hosts.push(noded)
            
          }
        }
      }
    }
  
    return hosts;
    console.log(hosts)
  }



}
