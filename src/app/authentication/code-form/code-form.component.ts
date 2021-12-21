import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.css']
})
export class CodeFormComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle("Recuperar minha senha - Referência");
   }

  codeResent: boolean = false;

  ngOnInit(): void {
  }

  message(){
    this.codeResent = true;
  }

}
