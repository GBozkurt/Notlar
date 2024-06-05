import { FireService,Kullanicilar} from './../fire.service';
import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { Yazi } from '../yaziEk.class';
import { doc, getFirestore,getDoc } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
  
})
@Component({
  selector: 'app-yaziekle',
  templateUrl: './yaziekle.page.html',
  styleUrls: ['./yaziekle.page.scss'],
})


export class YazieklePage implements OnInit {
  

  result:any=this.fireService.result;
  adi!:Kullanicilar;

  aaaa:any;
  
  constructor(private router:Router, private fireService:FireService,) { 
    
  }
  yaziData:Yazi = new Yazi;
  
  
  ngOnInit() {
    
    this.fireService.kullaniciListele(this.result).subscribe((sonuc:any)=>{this.adi=sonuc;},(er:any)=>{console.log("hata");});
  }

  

  cikis(){ 
    return this.router.navigateByUrl('/home');
  }

  gonder(){
    console.log(this.result);
    let yazia= {
      ad: this.adi.ad,
      bas: this.yaziData.baslik,
      yazi: this.yaziData.text,
      email: this.result
    }
    this.fireService.yeniKayit(yazia);
    return this.router.navigateByUrl('/home');
  }
}
