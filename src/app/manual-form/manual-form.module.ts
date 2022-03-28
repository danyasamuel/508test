import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualFormPageRoutingModule } from './manual-form-routing.module';

import { ManualFormPage } from './manual-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ManualFormPage]
})
export class ManualFormPageModule {}
