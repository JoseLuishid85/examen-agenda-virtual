import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAgendaComponent } from './components/lista-agenda/lista-agenda.component';
import { CrearAgendaComponent } from './components/crear-agenda/crear-agenda.component';

const routes: Routes = [
  { path: '', component: ListaAgendaComponent },
  { path: 'crear-agenda', component: CrearAgendaComponent },
  { path: 'editar-agenda/:id' , component: CrearAgendaComponent },
  { path: '**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
