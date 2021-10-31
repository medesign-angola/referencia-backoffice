import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.css']
})
export class CodeFormComponent implements OnInit {

  constructor() { }

  codeResent: boolean = false;

  ngOnInit(): void {
  }

  message(){
    this.codeResent = true;
  }

}
