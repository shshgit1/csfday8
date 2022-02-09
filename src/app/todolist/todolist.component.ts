import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoListfromstorage=new Map();

  constructor() { }

  ngOnInit(): void {
    for (let x=0;x<localStorage.length;x++){
      let keyvalue=localStorage.key(x) as string;
      this.todoListfromstorage.set(keyvalue,localStorage.getItem(keyvalue))
      console.log("hmm "+keyvalue)
      console.log(this.todoListfromstorage)
    }

  }

}
