import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateTableComponent } from './template/table.component';
import { OrclObjDtlComponent } from './detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/detail', pathMatch: 'full' },
  { path: 'detail', component: OrclObjDtlComponent },
  { path: 'template/table/:owner/:table', component: TemplateTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }