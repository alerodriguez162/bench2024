import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroTrash } from '@ng-icons/heroicons/outline';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroTrash })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
