import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  url = 'https://my.dpu.ac.th/webdynpro/dispatcher/dpu.ac.th/dcslcm~graderep/GradeReportApp?USERNAME=';
  value = {
    code:""
  }

  constructor(public navCtrl: NavController,private param:NavParams ,private iab: InAppBrowser) {
    this.value = param.get('value');


    this.url ='https://my.dpu.ac.th/webdynpro/dispatcher/dpu.ac.th/dcslcm~graderep/GradeReportApp?USERNAME='+this.value.code; 
    
    const browser = this.iab.create(this.url,'_self',{location:'no'}); 

  
  }

}
