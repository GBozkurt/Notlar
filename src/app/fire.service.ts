import { User } from './user.class';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDoc, getFirestore, setDoc, updateDoc} from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';


export interface yaziBilgi{
  id?:string;
  ad?:string;
  bas?:string;
  yazi?: string;
  email?:string;
}

export interface Kullanicilar{
  id?:string;
  ad?:string;
  email?:string;
}

@Injectable({
  providedIn: 'root'
})


export class FireService {
  public result:any;
  public eslesenfire:yaziBilgi[]=[];
 

  constructor(private auth:Auth,public firestore:Firestore, private alertController:AlertController) { }
  
 yeniKayit(yazi:any){
  const yaziSonuc = collection(this.firestore,'yazilar');
  return addDoc(yaziSonuc,yazi);
 }

 async isimAl(result:any) {
  const docRef = doc(this.firestore,`kullanicilar/${result}`);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
 }
 kayitListele():any{
  const s = collection(this.firestore,'yazilar');
  return collectionData(s,{idField:'id'})
 }

kullaniciListele(result:any):any{
  const s = doc(this.firestore,`kullanicilar/${result}`);
  return docData(s,{idField: 'id'});
 }

//  yeniKullanici(ad:any){
//   const kSonuc = collection(this.firestore,'kullanicilar');
//   return addDoc(kSonuc,ad);
//  }



 changeData(result:string){

  this.result = result;
  
}
changeData2(result:yaziBilgi[]){

  this.eslesenfire = result;
  
}

  async epostaParolaKayit(user:User){
    try{
      const kayitYapanK = await createUserWithEmailAndPassword(this.auth,user.email,user.password);
      return kayitYapanK;
    }
    catch(error)
    {
      return 'Hata : ' + error;
    }
  }

  async epostaParolaGiris(user:User){
    try{
      const girisYapanK = await signInWithEmailAndPassword(this.auth,user.email,user.password);
      return girisYapanK;
    }
    catch(error)
    {
      return 'Hata : ' + error;
    }
  }

  async cikis(){
    try{
      await signOut(this.auth);
      return true;
    }
    catch(error){
      return 'Hata : ' + error;
    }

    
  }
  async presentAlert(durum:any,mesaj:any){
      const alert = await this.alertController.create({
        header: durum,
        message: mesaj,
        buttons: ['Tamam'],
      });
      await alert.present();
  }

  yaziGetir(id:any):any{
    const yaziSonuc = doc(this.firestore, `yazilar/${id}`);
    return docData(yaziSonuc,{idField:'id'});
  }
  yaziGuncelle(yazi:yaziBilgi):any{
    const yaziSonuc = doc(this.firestore, `yazilar/${yazi.id}`);
    return updateDoc(yaziSonuc,{bas:yazi.bas,yazi:yazi.yazi});
  }
  yaziSil(id:any):any{
    const yaziSonuc = doc(this.firestore, `yazilar/${id}`);
    return deleteDoc(yaziSonuc);
  }
}
