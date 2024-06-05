import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FireService, yaziBilgi,Kullanicilar } from './../fire.service';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-kisisel',
  templateUrl: './kisisel.page.html',
  styleUrls: ['./kisisel.page.scss'],
})
export class KisiselPage implements OnInit {
  
  eslesen:yaziBilgi[]=this.fireService.eslesenfire;
  as:string="kisisel";
  constructor(private router:Router,private fireService:FireService,private modalController:ModalController) {
   
  }

  ngOnInit() {
    
  }

  cikis(){ 
    return this.router.navigateByUrl('/home');
  }

  async detayGoster(yazi:yaziBilgi){
    const modal =   await this.modalController.create({
      component:ModalPage,
      componentProps:{id :yazi.id,sayfa: this.as},
    })
    await modal.present();
    }

}
