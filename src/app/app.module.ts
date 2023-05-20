import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule ,MatSidenavContent} from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductComponent } from './list-product/list-product.component';
import { TrashComponent } from './trash/trash.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatRadioModule } from "@angular/material/radio";

// import {  } from "@angular/material/";

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
