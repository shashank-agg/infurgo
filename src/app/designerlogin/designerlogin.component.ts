import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-designerlogin',
  templateUrl: './designerlogin.component.html',
  styleUrls: ['./designerlogin.component.css']
})
export class DesignerloginComponent implements OnInit {

  private username:string;
  private password:string;
  public jsonResponse:any;
  public errorMsg:string;
  public error:boolean;


  constructor(private router:Router, private data: DataService) {
   }

  ngOnInit() {
  }
removeError(){
   this.error = false;
}
  login(){
    
      this.data.login(this.username,this.password).subscribe(survey=>{       
      this.jsonResponse=JSON.parse(survey._body);
      console.log(this.jsonResponse);
      if(this.jsonResponse.success){
        this.error = false;
        this.router.navigate(['/meetinglist']);
      }else{
        this.error = true;
        this.errorMsg = "Username or password is incorrect";
        this.router.navigate(['/designerlogin']);
      }
      },err=>{
        this.error = true;
        this.errorMsg = "Error Occured !!! Please try later";
        return false;
      });
  }


}
