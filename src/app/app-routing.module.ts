import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { HomeComponent } from './home/home.component';
import { PrevisaoComponent } from './previsao/previsao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'previsao', component: PrevisaoComponent },
  { path: 'estabelecimentos', component: EstabelecimentosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
