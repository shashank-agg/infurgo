import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileDropModule } from 'ngx-file-drop';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';



import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SizeComponent } from './size/size.component';
import { UploadComponent } from './upload/upload.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { MeetingdetailComponent } from './meetingdetail/meetingdetail.component';
import { HomeComponent } from './home/home.component';
import { ThankuComponent } from './thanku/thanku.component';
import { DesignerloginComponent } from './designerlogin/designerlogin.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { StartmeetingComponent } from './startmeeting/startmeeting.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataService } from './service/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OnCreateDirective } from './on-create.directive';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { FailureComponent } from './failure/failure.component';
import { AuthGuard } from '../guards/auth.guard';
import { MenuiconComponent } from './menuicon/menuicon.component';



const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', component: LayoutComponent },
            { path: 'layout', component: LayoutComponent },
            { path: 'size', component: SizeComponent },
            { path: 'question1', component: Question1Component },
            { path: 'question2', component: Question2Component },
            { path: 'userdetail', component: UserdetailComponent },
            { path: 'meetingdetail', component: MeetingdetailComponent },
            { path: 'thanku', component: ThankuComponent },
        ]
    },
    // { path: 'layout', component: LayoutComponent },
    // { path: 'size', component: SizeComponent, canActivate: [AuthGuard] },
    //   //{ path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
    // { path: 'question1', component: Question1Component, canActivate: [AuthGuard] },
    // { path: 'question2', component: Question2Component, canActivate: [AuthGuard] },

    // //    { path: 'size', component: SizeComponent},
    //   { path: 'upload', component: UploadComponent},
    // //   { path: 'question1', component: Question1Component},
    // //   { path: 'question2', component: Question2Component},

    //   { path: 'question3', component: Question3Component },
    // { path: 'userdetail', component: UserdetailComponent },
    // { path: 'meetingdetail', component: MeetingdetailComponent },
    //   { path: 'startmeeting/:id', component: StartmeetingComponent },
    //   { path: 'contactus', component: ContactusComponent },
    // { path: 'thanku', component: ThankuComponent },
    //   { path: 'failure', component: FailureComponent },
      { path: 'designerlogin', component: DesignerloginComponent },
    //   { path: 'meetinglist', component: MeetinglistComponent },
    //   { path: '', component: AppComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },

]


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        SizeComponent,
        UploadComponent,
        Question1Component,
        Question2Component,
        Question3Component,
        UserdetailComponent,
        MeetingdetailComponent,
        HomeComponent,
        ThankuComponent,
        DesignerloginComponent,
        MeetinglistComponent,
        StartmeetingComponent,
        ContactusComponent,
        OnCreateDirective,
        FailureComponent,
        MenuiconComponent
    ],
    imports: [
        BrowserModule,
        //RouterModule.forRoot(appRoutes, {useHash: true}),
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        FileDropModule,
        Ng2SmartTableModule,
        FormsModule,
        HttpModule,
        FileUploadModule,
        DataTableModule
    ],
    providers: [
        DataService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
