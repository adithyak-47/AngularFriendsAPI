import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {

  constructor(private api:ApiService) { }
  valueRead=()=>{
    let data={"name":this.name,
              "friendName":this.friendName,
              "friendNickName":this.friendNickName,
              "DescribeYourFriend":this.DescribeYourFriend}
              console.log("Hello")
    this.api.addFriends(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  ngOnInit(): void {
  }

}
