import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DxDataGridModule, DxTemplateModule} from 'devextreme-angular';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Service} from './service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
