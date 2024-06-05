import { Kullanicilar } from './../fire.service';
import { Component, OnInit } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { FireService} from '../fire.service';
import { Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData:User = new User();
  
  

  constructor(private fireService:FireService,private router:Router) {
    
   }
    
  ngOnInit() {
  }

 

   async giris(){
    const sonuc = await this.fireService.epostaParolaGiris(this.userData);
    const auth = getAuth();
    const user = auth.currentUser;
    this.fireService.changeData(this.userData.email);
    if(user){
      this.router.navigateByUrl('/home');
      this.fireService.changeData(this.userData.email);
      console.log(this.fireService.result);
    }
    else
    this.fireService.presentAlert('Hata','Hatalı kullanıcı adı veya şifre.')

    
   }

}
