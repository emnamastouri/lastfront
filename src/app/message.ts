export class Message {
    constructor(
      public username: string,
      public image: string,
      public message: string,
      public cin: string,
      public timestamp: Date,
      public color:string
    ) {}
  }