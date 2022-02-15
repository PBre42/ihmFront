import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mail:string='';
  message:string='';
  sent:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    console.log("email : " + this.mail);
    console.log("message : " + this.message);
    this.mail='';
    this.message='';
    this.sent=true;
  }
}
