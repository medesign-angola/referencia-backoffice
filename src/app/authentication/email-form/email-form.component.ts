import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  constructor(private router: Router, private title: Title) { 
    this.title.setTitle("Recuperar minha senha - Referência");
  }

  ngOnInit(): void {
  }

  route(){
    this.router.navigateByUrl('/code');
  }

}
