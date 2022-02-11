import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookanimal',
  templateUrl: './bookanimal.page.html',
  styleUrls: ['./bookanimal.page.scss'],
})
export class BookanimalPage implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
  
}

export class bookanimal{
  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

}
