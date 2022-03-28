import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualFormPage } from './manual-form.page';

const routes: Routes = [
  {
    path: '',
    component: ManualFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualFormPageRoutingModule {}
