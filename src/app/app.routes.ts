import { Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { CartComponent } from './pages/cart/cart.component';
import { InicioComponent } from './pages/home/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/components/loginForm/loginForm.component';
import { RegisterFormComponent } from './pages/login/components/registerForm/registerForm.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    {path: "", component: InicioComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "contatos", component: ContatosComponent},
    { path: "produto/:id", component: ProductdetailsComponent },
    {path: "carrinho", component: CartComponent},
    { 
        path: "login", component: LoginComponent, 
        children: [
            {path: "", component: LoginFormComponent },
            {path: "register", component: RegisterFormComponent}
        ] 
    },
    {path: "user", component: UserComponent}
];
