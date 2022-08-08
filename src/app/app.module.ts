import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGreenComponent } from './page-green/page-green.component';
import { PageBlueComponent } from './page-blue/page-blue.component';
import { PageRedComponent } from './page-red/page-red.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGreenComponent,
    PageBlueComponent,
    PageRedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
