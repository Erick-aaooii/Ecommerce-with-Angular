import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./pages/produtos/produtos.component').then(m => m.ProdutosComponent)
  },
  {
    path: 'contatos',
    loadComponent: () =>
      import('./pages/contatos/contatos.component').then(m => m.ContatosComponent)
  },
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./pages/productdetails/productdetails.component').then(m => m.ProductdetailsComponent)
  },
  {
    path: 'carrinho',
    loadComponent: () =>
      import('./pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/login/components/loginForm/loginForm.component').then(m => m.LoginFormComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/login/components/registerForm/registerForm.component').then(m => m.RegisterFormComponent)
      }
    ]
  },
  {
    path: 'user',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/user/user.component').then(m => m.UserComponent)
  }
];