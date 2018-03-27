import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import 'menuLayer.js'

declare var myExtObject: any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';
    domain = environment.webUrl;
constructor(private router: Router) {
}

  getStarted() {
    this.router.navigate(['home/layout']);
    // console.log("yolo", $);
    // $.fn.fullpage.moveTo(3);
    $('html, body').animate({
        scrollTop: $(".design-layout").offset().top
    });
  }

  showHome(){
    this.router.navigate(['/home123']);
    myExtObject.closeLayer();   
  }
  
  showLayout(){
    this.router.navigate(['/home/layout']);
    // $.fn.fullpage.moveTo(3);
    $('html, body').animate({
        scrollTop: $(".design-layout").offset().top
    });
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
    this.router.navigate(['/home#contactus']);
    myExtObject.closeLayer();
  }

}
