import { AlertController, ModalController } from '@ionic/angular';
import { FireService, yaziBilgi,Kullanicilar } from './../fire.service';
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  as:string="home";
  yazi!:yaziBilgi;
  adi2!:Kullanicilar;
  yazilar:yaziBilgi[]=[];
  eslesen:yaziBilgi[]=[];
  yazilarbos:yaziBilgi[]=[];

  constructor(private router:Router,private fireService:FireService, private alertController:AlertController,private modalController:ModalController) {
    this.fireService.kayitListele().subscribe((s:any)=>{this.yazilar = s;},( hata:any)=>{console.log("hata");});
    this.fireService.kullaniciListele(this.fireService.result).subscribe((sonuc:any)=>{this.adi2=sonuc;},(er:any)=>{console.log("hata");});
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });
    await alert.present();
  }


  async cikis(){
    const sonuc = await this.fireService.cikis();
    this.router.navigateByUrl('/login');
  }
  yaziYazdir(){
    return this.router.navigateByUrl('/yaziekle');
  }

  async detayGoster(yazi:yaziBilgi){
    const modal =   await this.modalController.create({
      component:ModalPage,
      componentProps:{id :yazi.id,sayfa:this.as},
    })
    await modal.present();
    }
    
  kisiselGit(){
    this.eslesen.splice(0, this.eslesen.length);
    this.yazilar.forEach(element => {
      if(element.email==this.fireService.result){
        this.eslesen.push(element);
        console.log("icerde");
      }
    });
    this.fireService.changeData2(this.eslesen);
    return this.router.navigateByUrl('/kisisel');
  }
}
