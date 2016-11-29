import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { OrclObjDtlComponent } from './detail.component';
import { TemplateTableComponent } from './template/table.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    OrclObjDtlComponent,
    TemplateTableComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
