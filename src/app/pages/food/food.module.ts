import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";

import { foodRoutes } from "./food.routes";
import { FoodComponent } from "./food.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(foodRoutes)
  ],  
  declarations: [ FoodComponent ],
  exports: [ FoodComponent ]
})
export class FoodModule { }
