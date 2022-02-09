import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GeneratetodoComponent } from './generatetodo/generatetodo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceclassService } from './serviceclass.service';

const approutes:Routes=[
  { path: 'todo/:id',component:GeneratetodoComponent},
  { path : '',component:TodolistComponent},
  { path: 'add',component:AddtodoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GeneratetodoComponent,
    TodolistComponent,
    AddtodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceclassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
