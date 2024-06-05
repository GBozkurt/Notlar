import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FireService,yaziBilgi,Kullanicilar } from '../fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id?:string;
  @Input() sayfa?:string;
  yazi!:yaziBilgi;
  adi2!:Kullanicilar;
  yazilar:yaziBilgi[]=[];
  eslesen:yaziBilgi[]=[];
  constructor(private modalController:ModalController,private fireService:FireService,private router:Router) { 
    this.fireService.kayitListele().subscribe((s:any)=>{this.yazilar = s;},( hata:any)=>{console.log("hata");});
  }

  ngOnInit() {
    this.fireService.yaziGetir(this.id).subscribe((s:any)=>{this.yazi=s;},(e:any)=>{});
    this.fireService.kullaniciListele(this.fireService.result).subscribe((sonuc:any)=>{this.adi2=sonuc;},(er:any)=>{console.log("hata");});
  }


  cikis(){ 
    this.modalController.dismiss({'dismissed':true});
  }

  async yaziGuncelle(){
   
    await this.fireService.yaziGuncelle(this.yazi);
    this.router.navigateByUrl('/home');
    this.modalController.dismiss();
  }
  async yaziSil(){ 
    await this.fireService.yaziSil(this.yazi.id);
   
  
    this.router.navigateByUrl('/home');
     
    this.modalController.dismiss();
   

  }
}
