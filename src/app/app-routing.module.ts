import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
{
  path:"",
  component:ListProductComponent
},
{
  path:"list-product",
  component:ListProductComponent
},
{
  path:"trash",
  component:TrashComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
