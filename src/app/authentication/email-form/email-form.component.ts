import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(){
    this.router.navigateByUrl('/code');
  }

}
