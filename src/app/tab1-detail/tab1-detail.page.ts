import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1-detail',
  templateUrl: 'tab1-detail.page.html',
  styleUrls: ['tab1-detail.page.scss']
})
export class Tab1DetailPage {


  // public namalengkap: any;
  // public noktp: any;
  // public email: any;
  // public gender: string;
  // public class: string;
  // public notbot: string;
  // public date: string;
  // public month: string;
  // public year: string;
    // {a: 1, b: 2, c: 3}
    public _data: any = {};
  constructor() {}

  pesan(){
    console.log(this._data);
    // console.log("Nama Lengkap   :  " +this.namalengkap);
    // console.log("Nomor Identitas:  " +this.noktp);
    // console.log("Email          :  " +this.email);
    // console.log("Gender         :  " +this.gender);
    // console.log("Date           :  " +this.date);
    // console.log("Month          :  " +this.month);
    // console.log("Year           :  " +this.year);
    // console.log("Class          :  " +this.class);
    // console.log("NotBot         :  " +this.notbot);
  }


}
