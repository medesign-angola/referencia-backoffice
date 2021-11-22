import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-requests',
  templateUrl: './recent-requests.component.html',
  styleUrls: ['./recent-requests.component.css']
})
export class RecentRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  star = faStar;

}
