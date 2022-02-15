import { Component, OnInit } from '@angular/core';
import { DoctorModalComponent } from '../doctor-modal/doctor-modal.component';

@Component({
  selector: 'app-modallist',
  templateUrl: './modallist.page.html',
  styleUrls: ['./modallist.page.scss'],
})
export class ModallistPage  {
doctors= [
  {
    name: "Dr Doggy",
    experience: 7
},

{
  name: "Dr Kitty",
  experience: 18
},


];
  constructor() { }

}
