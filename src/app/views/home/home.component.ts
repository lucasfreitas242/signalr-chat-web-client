import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Message {
  userName: string,
  text: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages: Message[] = [];
  messageControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    
  }

}



