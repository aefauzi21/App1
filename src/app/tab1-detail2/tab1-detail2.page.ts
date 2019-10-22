import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1-detail2',
  templateUrl: 'tab1-detail2.page.html',
  styleUrls: ['tab1-detail2.page.scss']
})
export class Tab1Detail2Page {
  public namalengkap: any;
  public noktp: any;
  public email: any;
  public gender: string;
  public class: string;
  public notbot: string;

  constructor() {}
  
  pesan(){
    console.log("Nama Lengkap   :  " + this.namalengkap);
    console.log("Nomor Identitas:  " +this.noktp);
    console.log("Email          :  " +this.email);
    console.log("Gender         :  " +this.gender);
    console.log("Class          :  " +this.class);
    console.log("NotBot         :  " +this.notbot);
  }


}
