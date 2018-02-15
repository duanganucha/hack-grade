import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  value = {
    code:""
  }

  constructor(public navCtrl: NavController ,public alertCtrl: AlertController) {
     
  }



  go(){ 
    console.log(this.value.code)
    if(this.value.code == '595162010019'){
        let alert = this.alertCtrl.create({
          title: 'Not ! ',
          subTitle: 'Connot request!',
          buttons: ['OK']
        });
        alert.present();
    }else{
      this.navCtrl.push(AboutPage,{value:this.value})
    }
  }

}
