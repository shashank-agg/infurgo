import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';
import persons from './data-table-demo1-data';


@Component({
  selector: 'app-meetinglist',
  providers: [],
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.css']
})
export class MeetinglistComponent implements OnInit {

    
    items = [];
    itemCount = 0;
    jsonResponse:string[];
    count;
    itemResource = new DataTableResource(persons);
    ngOnInit() {
        
    }
    constructor(private router: Router,private data: DataService) {
        this.data.getMeetingList().subscribe(
            survey=>{
                this.jsonResponse=JSON.parse(survey._body).meetingDtos;
             },err=>{
                console.log(err);
            });
            
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = this.jsonResponse);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.clientName; }

      openDetail(id){
          console.log("id"+id);
          this.router.navigate(['/startmeeting',id]);
      }  
}
