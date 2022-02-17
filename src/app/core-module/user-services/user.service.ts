import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/share-module/service/utils.service';
import { AuthService } from '../auth-service/auth.service';
import { UserModel } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private id;
  private firstName;
  private lastName;
  private category;
  private email;
  private phone;
  private agency;
  private localization;

  constructor(
    private auth: AuthService,
    private utilsService: UtilsService,
    private router: Router
  ) { }

  get userId(){
    return this.id;
  }
  set userId(id: number){
    this.id = id;
  }

  get userFirstName(){
    return this.firstName;
  }
  set userFirstName(firstName: string){
    this.firstName = firstName;
  }

  get userLastName(){
    return this.lastName;
  }
  set userLastName(lastName: string){
    this.lastName = lastName;
  }

  get userEmail(){
    return this.email;
  }
  set userEmail(email: string){
    this.email = email;
  }

  get userPhone(){
    return this.phone;
  }
  set userPhone(phone: string){
    this.phone = phone;
  }

  get userAgency(){
    return this.agency;
  }
  set userAgency(agency: string){
    this.agency = agency;
  }

  get userLocalization(){
    return this.localization;
  }
  set userLocalization(localization: string){
    this.localization = localization;
  }

  get userCategory(){
    return this.category;
  }
  set userCategory(category: string){
    this.category = category;
  }

  ngOnInit(): void {

  }

  fieldsReset(getForm){
    getForm.get('email').reset();
    getForm.get('password').reset();
  }

  login(formBuilder: any){

    this.auth.login(formBuilder.getRawValue()).subscribe(
      (response: any) => {
  
  
        if(response.auth_status == "invalid" && response.status == 401){
  
          this.utilsService.getToasterErrorAlerts(response.message, 'Acesso Negado');
  
          this.fieldsReset(formBuilder);
        
        }else if(response.auth_status == "valid" && response.status == 200){
  
          if(!response.access_token || response.access_token == ""){
  
            this.utilsService.getToasterErrorAlerts("Alguma coisa correu mal, tente novamente!", 'Ops!');
  
          }else{

            this.utilsService.getToasterSuccessAlerts('Será reencaminhado para a página inicial!', 'Acesso concedido', 3000, 'toast-top-center', true);

            this.fieldsReset(formBuilder);

            setTimeout(() => {
              
              this.auth.authenticateUser(response.access_token);

              this.userAuthenticated();

            }, 3000);
            
          }
  
        }else{
  
          this.utilsService.getToasterErrorAlerts("Alguma coisa correu mal, tente novamente!", 'Ops!');
  
        }
      },
      (error: any) => {
        // console.log(error.error);
  
        this.utilsService.getToasterErrorAlerts("Verifique a sua conexão à internet", 'Erro de conectividade');
  
      }
      );

  }
  
  userAuthenticated(){

    this.auth.getUserAuthenticated().subscribe((res) => {
      this.userId = res.id;
      this.userFirstName = res.name;
      this.userEmail = res.email;
      this.userCategory = 'Vendedor';

      // console.log(res);

    }, err => {
      console.log(err);
    });

  }

  isTokenExpired(){

    let token = this.auth.getToken();

    return this.auth.isTokenExpired(token);

  }

  tokenExpirateTime(){

    let token = this.auth.getToken();

    return this.auth.tokenExpirateTime(token);

  }

  logout(){
    return this.auth.userLogout().subscribe(res => {

      if(res.status == 200){

        if(this.auth.removeTokenAfterLogout()){

          this.router.navigate(['/login']);

        }

      }else{
        this.utilsService.getToasterErrorAlerts('Erro ao tentar sair da sua conta!', 'Erro', 3000);
      }

    }, err => {

      console.log(err);
      this.utilsService.getToasterErrorAlerts(err, 'Erro', 3000);
      
    });
  }


  
}
