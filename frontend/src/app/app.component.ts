import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = ''
  showButton: boolean = false;
  
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private location: Location, 
    private router: Router
    

   ) { 
     this.initializeApp();

    }
   

  pages = [
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'login',
      url: '/login',
      icon: 'log-in'
    },{
      title: 'register',
      url: '/register',
      icon: 'person-add'
    }

  ]

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isLoggedInUser(){
    // const loggedInUser = JSON.parse(localStorage.getItem('access'));
    // if(loggedInUser ===null){
    //   return false;
    // }
    // return true;

    const loggedInUser = JSON.parse(localStorage.getItem('access'));
    // const loggedInDoctor=JSON.parse(localStorage.getItem('doctorAccess'));
    
    if(loggedInUser !==null){
      return false;
    }
    return true;
  }

  isLoggedInDoctor(){
    const loggedInDoctor=JSON.parse(localStorage.getItem('doctorAccess'))
    if(loggedInDoctor !==null){
      return false;
    }
    return true;
  }


  isLoggedInAdmin(){
    const loggedInAdmin=JSON.parse(localStorage.getItem('adminAccess'));
    if(loggedInAdmin!==null){
      return false;
    }
    return true;
  }

  
  



  logout(){
    localStorage.clear();
    
  }

  goBack(){
    this.location.back();
    //this.location.getState();
    console.log(this.router.url);
  }

  hide(){
    if(this.router.url == '/home'){
      return false
    }
    return true;
  }


}
