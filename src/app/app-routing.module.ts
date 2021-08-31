import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  /*{
    path: '**',redirectTo:'home'
  },*/
  {
    path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
