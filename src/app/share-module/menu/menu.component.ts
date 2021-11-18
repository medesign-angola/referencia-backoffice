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
  imovel_icon: string = "assets/Icons/Activity.svg";
  dash_icon: string = "assets/Icons/icone -3 User.svg";
  proprietarios_icon: string = "assets/Icons/icone -3 User.svg";
  solici_icon: string = "assets/Icons/Paper.svg";
  users_icon: string = "assets/Icons/icone -3 User.svg";
  defin_icon: string = "assets/Icons/Setting.svg";

  ngOnInit(): void {
    //  console.log(this.router);
    // console.log(this.acti.snapshot.url.join(''));
    // console.log(this.router.rou());
    this.check();
  }

  seeTheActive(link){
    if( link === 'Imóveis'){

      this.imovel_icon = this.imovel_icon+"_w.svg";

    }else if( link === 'Proprietários' ){
      this.proprietarios_icon = this.proprietarios_icon+"_w.svg";
    }else if( link === 'Dashboard' ){
      this.title = "Dashboard";
    }else if( link === 'Solicitações' ){
      this.title = "Solicitações";
    }else if( link === 'Usuários' ){
      this.title = "Usuários";
    }else if( link === 'Definições' ){
      this.title = "Definições";
    }
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
