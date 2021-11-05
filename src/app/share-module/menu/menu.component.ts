import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router, 
    private acti: ActivatedRoute,
    private loc: Location
    ) { }

  title: any = this.check();
  url: string;

  ngOnInit(): void {
    //  console.log(this.router);
    // console.log(this.acti.snapshot.url.join(''));
    // console.log(this.router.rou());
    this.check();
  }

  check(){
    this.router.events.subscribe((event: Event) => {
      if( event instanceof NavigationEnd ){
        this.url = (<NavigationEnd>event).url;
        // console.log(this.title);
        if( this.url === '/admin/imoveis'){
          this.title = "Imóveis";
        }else if( this.url === '/admin/proprietarios' ){
          this.title = "Proprietários";
        }else if( this.url === '/admin/dashboard' ){
          this.title = "Dashboard";
        }else if( this.url === '/admin/solicitacoes' ){
          this.title = "Solicitações";
        }else if( this.url === '/admin/usuarios' ){
          this.title = "Usuários";
        }else if( this.url === '/admin/definicoes' ){
          this.title = "Definições";
        }
      }
    })
  }

}
