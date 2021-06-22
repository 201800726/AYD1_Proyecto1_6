import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from  '@angular/material/checkbox'
import { ViewChatsRoutingModule } from './view-chats-routing.module';
import { ViewChatsComponent } from './view-chats.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ViewChatsComponent
  ],
  imports: [
    CommonModule,
    ViewChatsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class ViewChatsModule { }
