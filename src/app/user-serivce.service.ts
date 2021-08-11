import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSerivceService {

  constructor(private http:HttpClient) { }
  checkUserId(userId){
    console.log("inside service");
    let link ="https://www.reddit.com/api/username_available.json?user="+userId;
     return this.http.get(link);
  }
}
