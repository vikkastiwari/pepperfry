import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GuestComponent } from './pages/guest/guest.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
//   {
//     path: 'guest',
//     component: GuestComponent,
//   },
  {
    path: 'home',
      component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }