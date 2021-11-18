import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check();
  }

  hide = false;
  visible;
  rightMove;


  check(){
    if(this.hide){
      this.visible = false;
      this.rightMove = -100;
    } else{
      this.visible = true;
      this.rightMove = 0;
    }
  }

  fadeOut(){
    this.hide = true;
  }

}
