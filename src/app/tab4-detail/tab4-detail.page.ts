import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4-detail',
  templateUrl: 'tab4-detail.page.html',
  styleUrls: ['tab4-detail.page.scss']
})
export class Tab4DetailPage {
  public firstname: any;
  public lastname: any;
  public email: any;
  public password: any;

  constructor() { }
  register() {
    console.log("First Name  :   " + this.firstname)
    console.log("Last Name   :   " + this.lastname)
    console.log("Email       :   " + this.email)
    console.log("Password    :   " + this.password)
  }
}
