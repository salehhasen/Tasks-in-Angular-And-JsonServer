import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailogComponent } from './dailog/dailog.component';
import {ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DailogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
