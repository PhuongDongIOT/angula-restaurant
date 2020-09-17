import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import(`./pages/home/home.module`).then(m => m.HomeModule)
  },
  {
    path:'food',
    loadChildren: () => import(`./pages/food/food.module`).then(m => m.FoodModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
