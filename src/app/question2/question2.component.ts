import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

 public selectedTheme:string;
 public model:SurveyRequestDto;
  public surveyId;
  public jsonResponse;
  public selectedThemename:any;
  public questionId = '5';
   constructor(private router:Router, private data: DataService) {
    this.model= new SurveyRequestDto();
   }


  ngOnInit() {
     this.surveyId = sessionStorage.getItem("ssn_surveyId");
        if (sessionStorage.getItem("ssn_question2ans") != undefined) {
            this.selectedTheme = sessionStorage.getItem("ssn_question2ans")==undefined?'0':sessionStorage.getItem("ssn_question2ans");
            this.selectedThemename =  sessionStorage.getItem("ssn_selectedThemenameq2");
        }
  }
 setSelectedTheme(e: any,s:any) {
    this.selectedTheme = e.target.value;
    this.selectedThemename=s;
  }

goNext(qid){


this.model.surveyId=this.surveyId;
  // this.model.questionid=qid;
  //   this.model.optionid=this.selectedTheme==undefined?'0':this.selectedTheme;
  //   this.data.saveQuestion(this.model).subscribe(survey=>{       
  //       this.jsonResponse=JSON.parse(survey._body);
  //     this.surveyId=this.jsonResponse.surveyId;
  //     console.log("server responded with surveyId "+this.surveyId); 
  //     this.data.getServerId(this.surveyId); 
  //       sessionStorage.setItem("ssn_question2ans", this.model.optionid);
  //     sessionStorage.setItem("ssn_selectedThemenameq2", this.selectedThemename);
  //     this.router.navigate(['/userdetail']);
  //     },err=>{
  //       console.log(err);
          
  //         return false;
  //     });

  this.router.navigate(['/userdetail']);
}

}
