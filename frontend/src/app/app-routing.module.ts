import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'bookanimal',
    loadChildren: () => import('./components/bookanimal/bookanimal.module').then( m => m.BookanimalPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./components/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'drlist',
    loadChildren: () => import('./drlist/drlist.module').then( m => m.DrlistPageModule)
  },
    {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
