import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manual-form',
  templateUrl: './manual-form.page.html',
  styleUrls: ['./manual-form.page.scss'],
})
export class ManualFormPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setupValidation();
  }
  setupValidation(){
    this.ionicForm = this.formBuilder.group({
      firstnameionic: ['', [Validators.required]],
      firstnamehtml: ['', [Validators.required]],
   })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
}
