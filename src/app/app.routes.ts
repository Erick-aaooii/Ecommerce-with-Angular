import { Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { CartComponent } from './pages/cart/cart.component';
import { InicioComponent } from './pages/home/inicio.component';

export const routes: Routes = [
    {path: "", component: InicioComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "contatos", component: ContatosComponent},
    { path: "produto/:id", component: ProductdetailsComponent },
    {path: "carrinho", component: CartComponent}
];
