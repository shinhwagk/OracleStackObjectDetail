import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

// import 'core-js'
import { AppComponent }  from './app.component';
import { OrclObjDtlComponent } from './detail.component';
import { TemplateTableComponent, TemplateTableInputComponent } from './template/table.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    OrclObjDtlComponent,
    TemplateTableComponent,
    TemplateTableInputComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
