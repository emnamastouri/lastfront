import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  

  
  private socket: Socket;
  private messageSubject = new Subject<Message>();
  

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('chat_message', (message: any) => {
      this.messageSubject.next(message);
    });

    
  }

  public sendUsername(username: string): void {
    this.socket.emit('username', username);
  }

  public sendImage(image:string):void{
  this.socket.emit('image',image);
}

public sendChatMessage(message: string): void {
  this.socket.emit('chat_message', message);
}
public sendCIN(cin: string): void {
    this.socket.emit('cin', cin);
}

  public getMessages(): Observable<Message> {
    return this.messageSubject.asObservable();
    
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
  
}
