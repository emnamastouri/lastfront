import { Component } from '@angular/core';
import { DataService } from '../../../service/data.service'; 
import { ChatService } from '../../../service/chat.service'; 
import { AuthentificationService } from '../../../service/authentification.service'; 
import { Message } from '../../../message';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-chatadmin',
  templateUrl: './chatadmin.component.html',
  styleUrl: './chatadmin.component.css'
})
export class ChatadminComponent {
  shouldScrollDown = false
  @ViewChild('chatMessage', { static: true })
  chatMessageRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }
  scrollToBottom() {
    const chatMessage = this.chatMessageRef.nativeElement;
    chatMessage.scrollTop = chatMessage.scrollHeight;
  }
  






  onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }

  getidentity(item: any) {
    if (item.cin == this.cin && item.username) {
      return "mine"
    }
    else {
      return "other"
    }
  }

  username: string = '';
  message: string = '';
  messages: Message[] = []
  geted: any;
  image: string = '';
  cin = '';
  user: any;
  url = "http://127.0.0.1:3100/getadminimage/";

  constructor(private _data: DataService, private socketService: ChatService, public _auth: AuthentificationService) {
    
    this.socketService.getMessages().subscribe((message: Message) => {
      this.messages.push(message)
      console.log('message' + message)
    });
    console.log('messsages' + this.messages)
    
  }

  ngOnInit(): void {
    this.scrollToBottom()
    this.cin = this._auth.getadmindata().cin;
    this._auth.getadminbyid(this.cin).subscribe(
      res => {
        this.user = res;
        this.username = this.user.firstname
        this.image = "http://127.0.0.1:3100/getadminimage/" + this.user.image

      }
    )
    this._data.getallmessages()
      .subscribe(
        res => {
          this.geted = res;
        },
        err => {
          console.log(err)
        }
      )


  }
  sendMessage(): void {
    setTimeout(() => {
      this.scrollToBottom();
    }, 50);
    if (this.username && this.message) {
      this.shouldScrollDown = true
      this.socketService.sendUsername(this.username);
      this.socketService.sendImage(this.image);
      this.socketService.sendCIN(this.user.cin)
      this.socketService.sendChatMessage(this.message);

      this.message = '';
      console.log(this.cin)
    }
  }
}
 