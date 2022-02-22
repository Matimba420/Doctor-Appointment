import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/api/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookanimal',
  templateUrl: './bookanimal.page.html',
  styleUrls: ['./bookanimal.page.scss'],
})
export class BookanimalPage implements OnInit {
  
  
  bookAnimal:any=[];
  


  
  constructor(private service:PetsService, private router:Router) { }

   ngOnInit() {

   this.getPets();

  
  }

  getPets(){
    this.service.getPets().subscribe(res=>{
      this.bookAnimal = res;
      console.log('*********************');
      
    //  console.log(this.bookAnimal[0].department);
    
    });
    
    // getAnimID(id: any): void{
    //   this.service.setPetId();
    // }



  }


  getDocInfo(name: any){
    console.log(name)
    localStorage.setItem("pet_name", JSON.stringify(name));
    // localStorage.setItem("pet_department", JSON.stringify(name.department));
    this.router.navigateByUrl('/drlist',{replaceUrl:true});
  }
  
 
}




