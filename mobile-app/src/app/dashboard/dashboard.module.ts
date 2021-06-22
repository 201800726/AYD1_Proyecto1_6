import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GreporteComponent } from './greporte/greporte.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { ReportItemComponent } from './view-reports/report-item/report-item.component';
import { ViewChatsComponent } from './view-chats/view-chats.component';
import { ChatComponent } from './view-chats/chat/chat.component';
import { ChatItemComponent } from './view-chats/chat-item/chat-item.component'


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    GreporteComponent,
    ViewReportsComponent,
    ReportItemComponent,
    ViewChatsComponent,
    ChatComponent,
    ChatItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class DashboardModule { }
