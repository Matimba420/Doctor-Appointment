import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  client = localStorage.getItem('access');
  userDetails: any=[]
  userAppointments:any=[];
  // details = {
  // }

  ngOnInit() {
    
    //console.log(JSON.parse(this.client));
    if(this.client==null){
      this.router.navigateByUrl('/login',{replaceUrl:true});
    }
    this.getProfile()
    this.getClientAppointments();

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
    localStorage.removeItem('pet_name');
    this.router.navigate(['/login']);
  }

  getClientAppointments(){
    this.userService.getClientAppointments(this.userDetails[0].id).subscribe(res=>{
      this.userAppointments=res
      console.log(this.userAppointments)
    })
  }

  cancelAppointment(id:any){
    console.log(id);
    console.log(this.userAppointments)
    

    Swal.fire({
      title: `Are you sure you want to cancel your appoint?`,
      text: `Once cancelled you will have to book another appointment should you want to book again!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      confirmButtonColor: "red",
      cancelButtonText: 'No, keep it',
      cancelButtonColor:'blue'
    }).then((result) => {

      if (result.isConfirmed) {
        this.userService.cancelAppointment(id).subscribe(res=>{
          Swal.fire('', res, 'success')
          console.log(res);
        });
        
        
        
        this.ngOnInit();
      } else if (result.isDismissed) {
        this.ngOnInit()
      }
    })
    
  }
  

}
