import { Component } from '@angular/core';
import { UserSerivceService } from './user-serivce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwcTest';
  userIdValidate = false;
  constructor(private userService:UserSerivceService){}
  submitData(formVal){
    let formData = formVal.value;
    if(formData.userId){
      this.userService.checkUserId(formData.userId).subscribe((result)=>{
        console.log('result ----------------->',result);
        if(result){
          alert("sign up was successful")
          this.userIdValidate = false;
          formVal.reset();
        }
        else{
          this.userIdValidate = true;
          alert("sign up was not successful")
        }
      })
    }
  }
  checkUserId(userId){
    console.log('checkUserId val ----------------->',userId.value);
    if(userId.value == "") { this.userIdValidate = false; }
    if(userId.value){
      this.userService.checkUserId(userId.value).subscribe((result)=>{
        console.log('result ----------------->',result);
        if(result){
          this.userIdValidate = false;
        }
        else{
          this.userIdValidate = true;
        }
      })
    }

  }
}
