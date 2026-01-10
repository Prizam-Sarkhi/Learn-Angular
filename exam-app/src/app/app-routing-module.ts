import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';
import { PipesDemo } from './pipes-demo/pipes-demo';

const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {path:'demo', component:Demo},
  {path:'databinding', component:DataBindingDemo},
  {path:'pipes', component:PipesDemo},
  { path: '**', redirectTo: 'demo' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
