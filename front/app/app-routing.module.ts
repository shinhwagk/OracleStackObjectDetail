import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateTableComponent } from './template/table.component';
import { OrclObjDtlComponent } from './detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/detail', pathMatch: 'full' },
  { path: 'detail',  component: OrclObjDtlComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent },
  { path:'template/table/:owner/:name', component:TemplateTableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}