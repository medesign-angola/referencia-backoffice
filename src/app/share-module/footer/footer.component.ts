import { Component, OnInit } from '@angular/core';
import { faFacebookF, faFacebookSquare, faInstagramSquare, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  faFacebook = faFacebookSquare;
  faTwitter = faTwitter;
  faInsta = faInstagramSquare

}
