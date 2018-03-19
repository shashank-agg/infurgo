import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import {DataService} from '../service/data.service';
import { environment } from '../../environments/environment';
import { SurveyRequestDto } from '../dto/survey-request-dto';
import {Router} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/api/imageupload';
const html = false;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

 public files: UploadFile[] = [];
 serveyId:string ;
   public questionId = '3';
   public model:SurveyRequestDto;
  public jsonResponse;
public message:string;
  public showError=false;
  
 constructor(private router:Router, private data: DataService) {
    this.model= new SurveyRequestDto();
   }

   public uploader:FileUploader ;
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() {
    this.data.surveyIdObserver.subscribe(serveyId => this.serveyId = serveyId)
  this.uploader = new FileUploader({url: URL,itemAlias:"images",parametersBeforeFiles:true,additionalParameter:{questionid:this.questionId,surveyId:this.serveyId}});
     console.log("Servey Id-->"+this.serveyId);
  }


  removeFromServer(item:any){
    this.model.surveyId=this.serveyId;
    this.model.imageName=item.file.name;
    this.data.deleteImage(this.model).subscribe(
      survey=>{
        this.jsonResponse=JSON.parse(survey._body);
        console.log("File deleted "); 
        item.remove();
      },err=>{
        console.log(err);
        this.showError=true;
          this.message="Error Occured !!! Please try later";
          return false;
      });
  }

}
