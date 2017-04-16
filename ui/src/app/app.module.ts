import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SelectInputComponent } from './input/select-input.component';
import { InputInputComponent } from './input/input-input.component';
import { AppRoutingModule } from './app-routing.module'
import { QueryService } from './query.service';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectInputComponent,
    InputInputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
