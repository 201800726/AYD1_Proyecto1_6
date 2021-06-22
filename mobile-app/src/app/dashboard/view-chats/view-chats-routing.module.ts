import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChatsComponent } from './view-chats.component';

const routes: Routes = [
  { path: '', component: ViewChatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChatsRoutingModule { }
