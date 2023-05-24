import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrasileiroComponent } from './pages/brasileiro/brasileiro.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { SelecaoComponent } from './pages/selecao/selecao.component';
import { HomeComponent } from './home/home.component';
import { CasacoComponent } from './pages/casaco/casaco.component';
import { KitsComponent } from './pages/kits/kits.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {
path: '',
component: HomeComponent
  },
  {
    path: 'brasileirao',
    component: BrasileiroComponent
  },
  {
    path: 'europeu',
    component: EuropaComponent
  },
  {
    path: 'selecoes',
    component: SelecaoComponent
  },
  {
    path: 'casacos',
    component: CasacoComponent
  },
  {
    path: 'kits',
    component: KitsComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
