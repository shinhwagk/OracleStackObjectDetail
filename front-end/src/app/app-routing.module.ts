import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectInputComponent } from './input/select-input.component';
import { InputInputComponent } from './input/input-input.component';
import { InputComponent } from './input.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }