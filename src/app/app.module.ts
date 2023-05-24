import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardsNavegationComponent } from './components/cards-navegation/cards-navegation.component';
import { BrasileiroComponent } from './pages/brasileiro/brasileiro.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { SelecaoComponent } from './pages/selecao/selecao.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CasacoComponent } from './pages/casaco/casaco.component';
import { KitsComponent } from './pages/kits/kits.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsNavegationComponent,
    BrasileiroComponent,
    EuropaComponent,
    SelecaoComponent,
    ProdutosComponent,
    CasacoComponent,
    KitsComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
