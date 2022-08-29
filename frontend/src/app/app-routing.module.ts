import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'system' },
  { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
  { path: 'coding', loadChildren: () => import('./pages/coding/coding.module').then(m => m.CodingModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
