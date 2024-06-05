import { FireService } from './../fire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { getAuth } from '@angular/fire/auth';
import { getDoc, getFirestore, setDoc } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userData:User = new User();
 
  
  constructor(private fireService:FireService,private router:Router) { }

  

  ngOnInit() {
    
  }
  async kayit(){   
    const sonuc = await this.fireService.epostaParolaKayit(this.userData)
    // let kayita = {
    //   ad:this.userData.name,
    //   email:this.userData.email
    // }
    // this.fireService.yeniKullanici(kayita);
    const db = getFirestore();
    await setDoc(doc(db, "kullanicilar", this.userData.email), {
      ad: this.userData.name,
      email:this.userData.email
    });
    const auth = getAuth();
    const user = auth.currentUser;
    this.fireService.changeData(this.userData.email);
    if(user){
      this.router.navigateByUrl('/home');
    }
    else
    this.fireService.presentAlert('Hata','Hatalı kullanıcı adı veya şifre.')
   }
}
