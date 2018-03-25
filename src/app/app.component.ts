import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import 'menuLayer.js'

declare var myExtObject: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    domain = environment.webUrl;
constructor(private router: Router) {
}

  getStarted() {
    this.router.navigate(['/layout']);
    // console.log("yolo", $);
    // $.fn.fullpage.moveTo(3);
  }

  showHome(){
    this.router.navigate(['/']);
    myExtObject.closeLayer();   
  }
  
  showLayout(){
    this.router.navigate(['/layout']);
    myExtObject.closeLayer();
  }

  showDesignerLogin(){
    this.router.navigate(['/designerlogin']);
    myExtObject.closeLayer();
  }

  showClientLogin(){
    this.router.navigate(['/clientlogin']);
    myExtObject.closeLayer();
  }

  showContactUs(){
    this.router.navigate(['/contactus']);
    myExtObject.closeLayer();
  }

}
