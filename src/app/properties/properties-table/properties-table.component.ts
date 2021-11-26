import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.css']
})
export class PropertiesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  star = faStar;

}
