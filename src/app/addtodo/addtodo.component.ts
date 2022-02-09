import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToDoObject } from '../models';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  taskname=new FormControl()
  duedate=new FormControl()
  groupedform!:FormGroup;


  constructor(private fb:FormBuilder) {
    this.groupedform=this.fb.group(
      {
        taskentry:this.taskname,
        duedateentry:this.duedate,
    }
    )
    }

  ngOnInit(): void {
  }
  onAdd():void{
  let abc = new ToDoObject(
    this.groupedform.value.taskentry,
    this.groupedform.value.duedateentry,
    localStorage.length+1);

  localStorage.setItem(JSON.stringify(abc.id),JSON.stringify(abc))

  }

}
