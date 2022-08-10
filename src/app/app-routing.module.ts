import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [{path:'',component:FriendsComponent},{path:'friends',component:FriendsComponent},{path:'addfriends',component:AddfriendsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
