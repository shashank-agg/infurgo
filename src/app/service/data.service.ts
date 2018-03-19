import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("default message");
  private surverId = new BehaviorSubject<string>("default message");
  domain = environment.apiUrl;
  urllayout="savelayout";
  urlsize="savesize";
  urldeleteimage="deleteimage";
  urlclientdetail='saveclientdetail';
  urlmeetingtimelist='getavailabletime';
  urlmeeting='savemeeting';
  urlquestion='savequestion';
  urldesignerlogin='login';
  urlmeetinglist='meetinglist';
  urlmeetingdetail='meetingdetail';

   
  surveyId:any;
  currentImage = this.messageSource.asObservable();
  surveyIdObserver = this.surverId.asObservable();

  constructor(private http:Http) { }

  getSelectedImage(image: string) {
    this.messageSource.next(image)
  }

  getServerId(id: string) {
    this.surverId.next(id)
  }

  saveLayout(model:SurveyRequestDto){
    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId==undefined?'0':model.surveyId);
    formData.append('questionid', model.questionid); 
    formData.append('optionid', model.optionid); 

   return this.http.post(this.domain+this.urllayout,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
      
  }


  saveSize(model:SurveyRequestDto){
    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId); 
    formData.append('questionid', model.questionid); 
    formData.append('side1', model.side1); 
    formData.append('side2', model.side2); 
    formData.append('side3', model.side3); 
    formData.append('side4', model.side4); 
 
    return this.http.post(this.domain+this.urlsize,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
    
     
  }

deleteImage(model:SurveyRequestDto){
    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId); 
    formData.append('fileName', model.imageName); 
   
 
    return this.http.post(this.domain+this.urldeleteimage,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
     
  }

saveClientData(model:SurveyRequestDto){
 
    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId);
    formData.append('firstName', model.firstName); 
    formData.append('lastName', model.lastName); 
    formData.append('email', model.email); 
    formData.append('mobile', model.mobile); 
    
    return this.http.post(this.domain+this.urlclientdetail,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
     
  }

getMeetingTime(model:SurveyRequestDto){
  
    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId);
    formData.append('meetingDate', model.meetingDate); 

    
    
    return this.http.post(this.domain+this.urlmeetingtimelist,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
     
  }
  
saveMeetingTimeSlot(model:SurveyRequestDto){
  
    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId);
    if(model.meetingId!=undefined){
      formData.append('meetingId', model.meetingId );
    }
    
    formData.append('meetingDate', model.meetingDate); 
    formData.append('meetingTimeSlot', model.meetingTimeSlot); 

    
    
    return this.http.post(this.domain+this.urlmeeting,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
     
  }


  saveQuestion(model:SurveyRequestDto){

    let formData: FormData = new FormData(); 
    formData.append('surveyId', model.surveyId);
    formData.append('questionid', model.questionid); 
    formData.append('optionids', model.optionid); 
    
    return this.http.post(this.domain+this.urlquestion,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
     
  }


  login(username:string,password:string){

    let formData: FormData = new FormData(); 
    formData.append('username', username);
    formData.append('password', password); 
    
    return this.http.post(this.domain+this.urldesignerlogin,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     
  }

  getMeetingList(){
    let formData: FormData = new FormData(); 
     return this.http.post(this.domain+this.urlmeetinglist,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
  
getMeetingDetail(id){
    let formData: FormData = new FormData(); 
    formData.append('id', id);
     return this.http.post(this.domain+this.urlmeetingdetail,formData).map(
     surveyId=>this.surveyId=surveyId)
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }


}