import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";

import { homeRoutes } from "./home.routes";
import { HomeComponent } from "./home.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],  
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
