import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TalentsListComponent } from './pages/talents-list/talents-list.component';
import { plan2color } from './pipes/plan2color.pipe';
import { brand2logo } from './pipes/brand2logo.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TalentCardComponent } from './components/talent-card/talent-card.component';
import { TalentDetailsComponent } from './components/talent-details/talent-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesModalComponent } from './components/modals/notes-modal/notes-modal.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    TalentsListComponent,
    plan2color,
    brand2logo,
    TalentCardComponent,
    TalentDetailsComponent,
    HeaderComponent,
    SidebarComponent,
    NotesModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SidebarModule,
    NgbModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
