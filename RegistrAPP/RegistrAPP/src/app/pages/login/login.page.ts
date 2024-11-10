import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomInputComponent } from "../../shared/custom-input/custom-input.component";
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { User } from 'src/app/models/bd.models';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  firebaseSvc= inject(FirebaseService)
  utilsSvc = inject(UtilsService)


  ngOnInit() {}
  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signIn(this.form.value as User).then(res => {
      console.log(res)
      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2000,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'

        });

      }).finally(() => {
        loading.dismiss();
      })
    }
  }
}
