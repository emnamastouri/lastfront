import { Component, inject } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-voirallhost',
  templateUrl: './voirallhost.component.html',
  styleUrl: './voirallhost.component.css'
})
export class VoirallhostComponent {
  trustedurl:any
  private sanitizer=inject(DomSanitizer)


  constructor(public _data:DataService){
    this.trustedurl=this.sanitizer.bypassSecurityTrustResourceUrl('/assets/emna.html')
  }
}
