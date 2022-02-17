import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { 
    
  }

  ngOnInit(): void {
    // console.log("Inicio dash");
  }

  ngOnDestroy(): void {
      // console.log("Fim dash");
  }

}
