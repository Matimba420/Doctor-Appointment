import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  client = localStorage.getItem('access');
  userDetails: any=[]
  // details = {
  // }

  ngOnInit() {
    
    //console.log(JSON.parse(this.client));
    if(this.client==null){
      this.router.navigateByUrl('/login',{replaceUrl:true});
    }
    this.getProfile()

  }

  getProfile(){
    this.userDetails = JSON.parse(localStorage.getItem('access'));
    // this.userService.getUser(this.client).subscribe((res: any)=>{
      // this.userDetails = res;
      console.log(this.userDetails)
    // })
    
  }

  logOut(){
    localStorage.removeItem('access');
    this.router.navigate(['/login'])
  }

}
