import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { AsyncPipe, Location } from '@angular/common';

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
  icon_format = ".svg";
  imovel_icon: string = "assets/Icons/Activity"+this.icon_format;
  dash_icon: string = "assets/Icons/icone -3 User"+this.icon_format;
  proprietarios_icon: string = "assets/Icons/icone -3 User"+this.icon_format;
  solici_icon: string = "assets/Icons/Paper"+this.icon_format;
  users_icon: string = "assets/Icons/icone -3 User"+this.icon_format;
  defin_icon: string = "assets/Icons/Setting"+this.icon_format;

  ngOnInit(): void {
    this.check();
    this.checkSettings();
  }

  check(){
    this.router.events.subscribe((event: Event) => {
      if( event instanceof NavigationEnd ){
        this.url = (<NavigationEnd>event).url;
        // console.log(this.title);
        if( this.url === '/admin/imoveis'){

          this.title = "Imóveis";
          this.imovel_icon = "assets/Icons/Activity_w"+this.icon_format;
          this.dash_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.proprietarios_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.solici_icon = "assets/Icons/Paper"+this.icon_format;
          this.users_icon = "assets/Icons/icone -3 User"+this.icon_format;

        }else if( this.url === '/admin/proprietarios' ){

          this.title = "Proprietários";
          this.imovel_icon = "assets/Icons/Activity"+this.icon_format;
          this.dash_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.proprietarios_icon = "assets/Icons/icone -3 User_w"+this.icon_format;
          this.solici_icon = "assets/Icons/Paper"+this.icon_format;
          this.users_icon = "assets/Icons/icone -3 User"+this.icon_format;

        }else if( this.url === '/admin/dashboard' ){

          this.title = "Dashboard";
          this.imovel_icon = "assets/Icons/Activity"+this.icon_format;
          this.dash_icon = "assets/Icons/icone -3 User_w"+this.icon_format;
          this.proprietarios_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.solici_icon = "assets/Icons/Paper"+this.icon_format;
          this.users_icon = "assets/Icons/icone -3 User"+this.icon_format;

        }else if( this.url === '/admin/solicitacoes' ){

          this.title = "Solicitações";
          this.imovel_icon = "assets/Icons/Activity"+this.icon_format;
          this.dash_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.proprietarios_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.solici_icon = "assets/Icons/Paper_w"+this.icon_format;
          this.users_icon = "assets/Icons/icone -3 User"+this.icon_format;

        }else if( this.url === '/admin/usuarios' ){

          this.title = "Usuários";
          this.imovel_icon = "assets/Icons/Activity"+this.icon_format;
          this.dash_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.proprietarios_icon = "assets/Icons/icone -3 User"+this.icon_format;
          this.solici_icon = "assets/Icons/Paper"+this.icon_format;
          this.users_icon = "assets/Icons/icone -3 User_w"+this.icon_format;

        }
      }
    })
  }

  hide = true;
  visible;
  rightMove;


  checkSettings(){
    if(this.hide){
      this.visible = false;
      this.rightMove = -100;
    } else{
      this.visible = true;
      this.rightMove = 0;
    }
  }
  
  showSettings(){
    this.hide = false;
  }

  fadeOut(){
    this.hide = true;
  }

}
