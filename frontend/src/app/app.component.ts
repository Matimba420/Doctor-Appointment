import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = '';
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,

   ) { this.initializeApp()}

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
}
