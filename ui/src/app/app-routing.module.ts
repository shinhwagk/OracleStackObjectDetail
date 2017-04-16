import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectInputComponent } from './input/select-input.component';
import { InputInputComponent } from './input/input-input.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputComponent, pathMatch: 'full' },
  { path: 'details', component: OutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }