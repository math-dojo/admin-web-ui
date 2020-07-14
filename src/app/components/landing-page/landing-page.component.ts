import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent  {

  newUserSignupForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor() {

   }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newUserSignupForm.value);
    // this.signupNewUser(this.newUserSignupForm.value);
  }


  private signupNewUser(newUser) {

  }

}
