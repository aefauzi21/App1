import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Tab4DetailPage } from '../tab4-detail/tab4-detail.page';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
    authService: any;
    alertService: any;
  
  constructor(
    private modalController: ModalController,
    //private authService: AuthService,
    private navCtrl: NavController,
    //private alertService: AlertService
  ) { }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissTab4() {
    this.modalController.dismiss();
  }
  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissTab4();
    const registerModal = await this.modalController.create({
      component: Tab4DetailPage
    });
    return await registerModal.present();
  }
  tab4(form: NgForm) {
    this.authService.tab4(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissTab4();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }
}