import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/api/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookanimal',
  templateUrl: './bookanimal.page.html',
  styleUrls: ['./bookanimal.page.scss'],
})
export class BookanimalPage implements OnInit {
  
  
  bookAnimal;


  
  constructor(private service:PetsService, private router:Router) { }

   ngOnInit() {

   this.getPets();

  
  }

  getPets(){
    this.service.getPets().subscribe(res=>{
      this.bookAnimal = res;
     console.log(this.bookAnimal);
    
    });
    
    // getAnimID(id: any): void{
    //   this.service.setPetId();
    // }



  }


  getDocInfo(name: any){
    console.log(name)
    localStorage.setItem("pet_name", JSON.stringify(name));
    this.router.navigateByUrl('/drlist',{replaceUrl:true});
  }
  


            // export class bookanimal{
            //   logScrollStart(event) {
            //     console.log("logScrollStart : When Scroll Starts", event);
            //   }

            //   logScrolling(event) {
            //     console.log("logScrolling : When Scrolling", event);
            //   }

            //   logScrollEnd(event) {
            //     console.log("logScrollEnd : When Scroll Ends", event);
            //   }
 
}




