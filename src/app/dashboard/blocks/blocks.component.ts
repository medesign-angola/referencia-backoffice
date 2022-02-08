import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
  styles: [`
      .chart-green .chart-img svg circle:nth-child(2){
          stroke-dasharray: calc(100 * 6);
          /* 45 equivale à 100% */
          stroke-dashoffset: calc((100 * 6) - ((100 * 6) * 33 ) / 100);
      }
      .chart-blue .chart-img svg circle:nth-child(2){
        stroke-dasharray: calc(100 * 6);
        /* 45 equivale à 100% */
        stroke-dashoffset: calc((100 * 6) - ((100 * 6) * 12 ) / 100);
      }
      .chart-orange .chart-img svg circle:nth-child(2){
        stroke-dasharray: calc(100 * 6);
        /* 45 equivale à 100% */
        stroke-dashoffset: calc((100 * 6) - ((100 * 6) * 22.5 ) / 100);
      }
      .chart-purple .chart-img svg circle:nth-child(2){
        stroke-dasharray: calc(100 * 6);
        /* 45 equivale à 100% */
        stroke-dashoffset: calc((100 * 6) - ((100 * 6) * 35 ) / 100);
      }
  `]
})
export class BlocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ^Maximum limit 45

  pointDashOffsetGreen = 33;
  pointDashOffsetBlue = 12;
  pointDashOffsetOrange = 22.5;
  pointDashOffsetPurple = 35;

  percentageValueGreen = (this.pointDashOffsetGreen*100)/45;
  percentageValueBlue = (this.pointDashOffsetBlue*100)/45;
  percentageValueOrange = (this.pointDashOffsetOrange*100)/45;
  percentageValuePurple = (this.pointDashOffsetPurple*100)/45;

  // p = this.percentageValueGreen.toFixed(0);

}
