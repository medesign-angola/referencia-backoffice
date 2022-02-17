import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { AsyncPipe, Location } from '@angular/common';
import { UtilsService } from '../service/utils.service';
import { UserService } from 'src/app/core-module/user-services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
    ) { 
      
     }

  title: any = this.check();
  userName: string;
  userCategory:string;
  
  // Settings transition variables

  hide = true;
  visible;
  rightMove;

  // Menu Vertical icons

  url: string;
  icon_format = ".svg";
  imovel_icon: string = "assets/Icons/Activity"+this.icon_format;
  dash_icon: string = "assets/Icons/icone -3 User"+this.icon_format;
  proprietarios_icon: string = "assets/Icons/icone -3 User"+this.icon_format;
  solici_icon: string = "assets/Icons/Paper"+this.icon_format;
  users_icon: string = "assets/Icons/icone -3 User"+this.icon_format;
  defin_icon: string = "assets/Icons/Setting"+this.icon_format;

  //  Menu Horizontal User Modal Icons
  
  user_icon: string = "assets/Icons/icone -1 User"+this.icon_format;
  support_icon: string = "assets/Icons/icone -1 User"+this.icon_format;
  logout_icon: string = "assets/Icons/Logout"+this.icon_format

  // Notification countin, refleting in the svg image
  notifications: number = 0;

  ngOnInit(): void {
    this.check();
    this.checkSettings();
    // this.getAuthenticatedUser();
    this.getUserAuthenticated();
    this.verifyUserToken();
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

        }else if( this.url === '/admin/minha-conta' ){

          this.title = "Perfil";

        }
      }
    })
  }

  logout(){
    
    if(confirm("Deseja realmente sair da sua conta?")){
      this.userService.logout();
    }else{}

  }

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

  
  // User Modal Toggle

  user_modal_visible = false;

  user_toggle(){
    if(this.user_modal_visible == false){
      this.user_modal_visible = true;
    }else{
      this.user_modal_visible = false;
    }
  }

  getUserAuthenticated(){

    this.userService.userAuthenticated();

    let interval = setInterval(() => {
      if(this.userService.userFirstName === undefined && this.userService.userLastName === undefined ){
        // console.log("Estão undefind!");
      }else{
        this.userName = this.userService.userFirstName;
        this.userCategory = this.userService.userCategory;

        // console.log(this.userName);

        clearInterval(interval);
      }
    }, 2000);
  }

  verifyUserToken(){
    
    // console.log(this.userService.tokenExpirateTime());

    let intervalToVerifyStatusToken = setInterval(() => {
      // console.log(this.userService.isTokenExpired());
    }, 5000);

  }

}
