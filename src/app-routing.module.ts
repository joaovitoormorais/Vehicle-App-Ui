import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  // Redireciona para a página de login (ou inicial) se a rota for vazia
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  // Carregamento tardio do módulo Core
  {
    path: 'core',
    loadChildren: () => import('./core/core.module')
      .then(m => m.CoreModule)
  },

  // Carregamento tardio do módulo Vehicle
  {
    path: 'veiculo',
    loadChildren: () => import('./vehicle/vehicle.module')
      .then(m => m.VehicleModule)
  },

  // Página de erro 404 para rotas desconhecidas
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuração das rotas principais
  exports: [RouterModule] // Exporta RouterModule para ser usado na aplicação
})
export class AppRoutingModule { }
