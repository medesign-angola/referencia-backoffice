import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private location: Location,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Minha conta - Referência");
  }

  ngOnDestroy(): void {
      
  }

  faArrowLeft = faArrowLeft;

  previous(): void{

    this.location.back();

  }

}
