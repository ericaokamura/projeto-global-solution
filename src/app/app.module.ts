import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    PrevisaoComponent,
    EstabelecimentosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
