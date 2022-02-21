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

  constructor(private service: DoctorService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getDoctor();
    
  }


  getDoctor(){
    this.service.getDoctors().subscribe(res=>{
      this.drlist = res;
      console.log(this.drlist)
    })
  }

  // showResults(){
  //   if(this.filterTerm == ''){
  //     return false;
  //   }

  //   return true;
  // }

  

}
