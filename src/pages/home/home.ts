import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentSegment: string = "segment1";  
  @ViewChild(Slides) slides: Slides;
  
  constructor(public navCtrl: NavController) {

  }

  doSomething(event){
    console.log("Scroll fired");
  }

  showSegment() {
    if (this.currentSegment == "segment1") {
      this.slides.slideTo(0, 0);
    }
    else if (this.currentSegment == "segment2") {
      this.slides.slideTo(1, 0);
    }
  }

  slideChanged() {
    if (this.slides._activeIndex == 0) {
      this.currentSegment = "segment1";
    }
    else if (this.slides._activeIndex == 1) {
      this.currentSegment = "segment2";
    }
  }

}
