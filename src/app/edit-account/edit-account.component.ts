import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  constructor(
    private location: Location,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Editar perfil - Referência");
  }

  faArrowLeft = faArrowLeft;

  previous(): void{

    this.location.back();

  }

}
