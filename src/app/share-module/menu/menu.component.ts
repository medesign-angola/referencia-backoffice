import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { AsyncPipe, Location } from '@angular/common';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router, 
    private acti: ActivatedRoute,
    private loc: Location,
    private authService: AuthService,
    private toastrService: ToastrService
    ) { }

  title: any = this.check();

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
    this.getAuthenticatedUser();
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

  // logout(){
  //   this.authService.userLogout().subscribe((response: any) => {
  //       // console.log(response);

  //       localStorage.removeItem('token');

  //       this.router.navigate(['/login']);
  //   },
  //   (error: any) => {
  //     console.log(error.message);
  //   });

  // }
  logout(){
    
    return this.authService.userLogout().subscribe(res => {

      if(res.status == 200){
        if(this.authService.removeTokenAfterLogout()){

          this.router.navigate(['/']);
  
        }else{
          this.getToasterErrorAlerts('Erro ao tentar sair da sua conta!', 'Erro', 3000);
        }
      }else{
        this.getToasterErrorAlerts('Erro ao tentar sair da sua conta!', 'Erro', 3000);
      }

    }, err => {

      this.getToasterErrorAlerts(err, 'Erro', 3000);
      
    });

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

// Get User authenticated

public user_name: string = '';
public user_id: number = 0;
public user_role: any = [];

getAuthenticatedUser(){
  return this.authService.getUserAuthenticated().subscribe((resp: any) => {
    // console.log(resp.name);
    this.user_name = resp.name;
    this.user_id = resp.id;
    this.user_role = 'Administrador';

  }, (err: any) => {
    console.log(err);

    this.getToasterErrorAlerts(err, 'Erro', 3000);
    
  });
}

getToasterErrorAlerts(message: string, classification: string, timeOutDuration: number){

  return this.toastrService.error(message, classification, {
    timeOut: timeOutDuration,
  });

}

}
