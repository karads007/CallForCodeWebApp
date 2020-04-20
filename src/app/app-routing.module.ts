import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteractionsComponent } from './view-interactions/interactions.component';

const routes: Routes = [
  { path: 'interactions', component: InteractionsComponent },
  { path: '', redirectTo: 'interactions', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
