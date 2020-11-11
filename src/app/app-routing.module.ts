import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentsListComponent } from './talents-list/talents-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'talents', component: TalentsListComponent },
  { path: '', redirectTo: 'talents', pathMatch: 'full' }

];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }