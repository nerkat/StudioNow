import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentsListComponent } from './talents-list/talents-list.component';

const routes: Routes = [
  { path: 'talents', component: TalentsListComponent },
  { path: '',   redirectTo: 'talents', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }