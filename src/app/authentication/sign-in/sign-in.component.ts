
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
import { interval, Subscription, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  form: FormGroup;
  incorrect = false;
  panelMessages = '';
  errors:any = '';
  $subs: Subscription;

  constructor(
    private formbuilder: FormBuilder,
    private _authService: AuthService,
    private title: Title,
    private router: Router,
    private http: HttpClient,
    private toastrService: ToastrService,
  ) { 
    // this.form = this.formbuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    this.title.setTitle("Entrar na minha Conta - Referência");
  }


  ngOnInit(): void {
    // this.form = this.formbuilder.group({
    //   email: '',
    //   password: ''
    // });

    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    });

    this.getMessages();

    // this.clear();

    // this.form.dirty;
  }

  // pati@pati.com

  submit(): void{
    this._authService.login(this.form.getRawValue()).subscribe(
    (response: any) => {
      // console.log(response);
      
      // localStorage.setItem('token', response.access_token);

      // this.router.navigate(['/admin/']);
      if(response.status){
        // this._authService.setAuthMessages(response.status);
        this.incorrect = true;
        
        this.toastrService.error(response.status, 'Erro', {
          timeOut: 3000,
        });

        this.form.get('email').reset();
        this.form.get('password').reset();
      }else{
        if(!response.access_token || response.access_token == ""){
          this._authService.setAuthMessages('Erro ao fazer o login, tente novamente!');
        }else{

          

        this.form.get('email').reset();
        this.form.get('password').reset();

          localStorage.setItem('token', response.access_token)
          // console.log(response.access_token);
  
          this.router.navigate(['/admin']);

          // const helper = new JwtHelperService();

          // const decodeToken = helper.decodeToken(response.access_token);
          // const expir = helper.getTokenExpirationDate(response.access_token);
          // const isexp = helper.isTokenExpired(response.access_token);

          // console.log(isexp);
          
        }
      }
    }, 
    (error: any) => {
      // console.log(error.error);

      // this._authService.setAuthMessages(error);
      this.toastrService.error("Verifique a sua conexão à internet.", 'Erro de conectividade', {
        timeOut: 3000,
      });
      this.incorrect = true;

      // console.log(this.errors);
      // this.errors = error.error;
    }
    );
  }

  getMessages(){
    this.$subs = this._authService.getAuthMessage().subscribe((message: any) => {
      // console.log(message);
      if(message.status){
        this.errors = message.status;
      }else{
        this.errors = message;
        // console.log(message);
      }
    });

    // console.log(this.$subs);
    // const messageCount = timer(2000);

    // messageCount.subscribe((c) => {
    //   if(this.errors != ''){
    //     // this.$subs.unsubscribe();
    //   }else{}
    // });
  }
}
