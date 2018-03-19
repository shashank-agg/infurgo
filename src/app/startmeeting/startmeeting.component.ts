import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClientDataDto } from '../dto/clientData';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { TimeslotDto } from '../dto/timeslot';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-startmeeting',
  templateUrl: './startmeeting.component.html',
  styleUrls: ['./startmeeting.component.css']
})
export class StartmeetingComponent implements OnInit {

clientData:ClientDataDto =new ClientDataDto();
params: any;
 public model:SurveyRequestDto =new SurveyRequestDto();
  public timeslots:TimeslotDto[];
  public jsonResponse;
   selectedTimeSlot:string='';
  public surveyId:string;
public messageDate:string;
  public showErrorDate=false;
  public messageTimeslot:string;
  public showErrorTimeslot=false;

  constructor(private router: Router,private data: DataService,private activatedRoute: ActivatedRoute) {
    this.params= this.activatedRoute.snapshot.params;
    }

  ngOnInit() {
    $.getScript('../../assets/js/datepicker_func.js');
    this.data.getMeetingDetail(this.params.id).subscribe(
            survey=>{
              console.log(JSON.parse(survey._body).meetingDtos[0]);
                this.clientData=JSON.parse(survey._body).meetingDtos[0];
                this.surveyId=this.clientData.surveyId;
             },err=>{
                console.log(err);
            });
  }

removeError(){
   this.showErrorDate=false;
   this.showErrorTimeslot=false;
}
  getMeetingTimeSlot(val:string){
    if(val != ''){
      
      this.model.meetingDate = val;
      this.model.surveyId = this.surveyId;
    console.log(this.model);
    this.data.getMeetingTime(this.model).subscribe(
      survey=>{
        this.jsonResponse=JSON.parse(survey._body);
        console.log(this.jsonResponse);
        this.timeslots = this.jsonResponse.availableTimeSlot;
        console.log(this.timeslots);
      },err=>{
        console.log(err);
      });
    }
  }


saveMeeting(){
    
      
      this.model.meetingTimeSlot = this.selectedTimeSlot;
      this.model.meetingId = this.params.id;

      if(this.model.meetingDate=='' || this.model.meetingDate==undefined){

          this.showErrorDate=true;
          this.messageDate="Meeting date is required";
          return false;
        }else{
          this.showErrorDate=false;
        }
        if(this.model.meetingTimeSlot=='' || this.model.meetingTimeSlot==undefined){
          this.showErrorTimeslot=true;
          this.messageTimeslot="Timeslot is required";
          return false;
        }else{
          this.showErrorTimeslot=false;
        }

      
    console.log(this.model);
    this.data.saveMeetingTimeSlot(this.model).subscribe(
      survey=>{
        this.jsonResponse=JSON.parse(survey._body);
        // this.router.navigate(['/thanku']);
        console.log(this.jsonResponse);
        this.surveyId=this.jsonResponse.surveyId;
        this.router.navigate(['/meetinglist']);
      },err=>{
        console.log(err);
         this.showErrorDate=true;
          this.messageDate="Error Occured !!! Please try later";
          return false;
      });
     
    
  }
}
