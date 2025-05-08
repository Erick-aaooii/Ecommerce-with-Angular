import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';

export const routes: Routes = [
    {path: "", component: InicioComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "contatos", component: ContatosComponent},
    { path: 'produto/:id', component: ProductdetailsComponent }
];
