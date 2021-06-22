import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChatsRoutingModule } from './view-chats-routing.module';
import { ViewChatsComponent } from './view-chats.component';


@NgModule({
  declarations: [
    ViewChatsComponent
  ],
  imports: [
    CommonModule,
    ViewChatsRoutingModule
  ]
})
export class ViewChatsModule { }
