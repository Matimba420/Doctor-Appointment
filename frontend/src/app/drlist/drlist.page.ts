import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../api/doctor.service';


@Component({
  selector: 'app-drlist',
  templateUrl: './drlist.page.html',
  styleUrls: ['./drlist.page.scss'],
  
})
export class DrlistPage implements OnInit {
  
  filterTerm: string;
  drlist:any=[];
  show: boolean = true;
  petInfo=JSON.parse(localStorage.getItem('pet_name'));
  client = localStorage.getItem('access');
  

  constructor(private service: DoctorService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    if(this.client==null){
      this.router.navigateByUrl('/login',{replaceUrl:true});
    }

    this.getPetAndDocInfo();
    console.log(this.petInfo.pet_name);
    
    
  }


  getPetAndDocInfo(){
    this.service.getPetAndDocInfo(this.petInfo.pet_name).subscribe(res=>{
      this.drlist = res;
      console.log('***********');
      
      console.log(res)
    })
  }


  // getPet(){
  //   this.service.getPetAndDocInfo(this.petInfo.pet_name).subscribe(res=>{
  //     console.log(res);
      
  //   })
  // }

  // showResults(){
  //   if(this.filterTerm == ''){
  //     return false;
  //   }

  //   return true;
  // }



}
