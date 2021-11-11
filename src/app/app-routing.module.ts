import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'favorite', loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoriteModule), canActivate: [AuthGuard]
  },
  {
    path: 'about/:page/:id', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**', redirectTo: 'home'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
