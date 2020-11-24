import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TalentsListComponent } from './talents-list/talents-list.component';
import { plan2color } from './pipes/plan2color.pipe';
import { brand2logo } from './pipes/brand2logo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TalentsListComponent,
    plan2color
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
