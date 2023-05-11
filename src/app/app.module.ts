import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPgComponent } from './main-pg/main-pg.component';
import { AboutPgComponent } from './about-pg/about-pg.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { WorksPgComponent } from './works-pg/works-pg.component';
import { ContactPgComponent } from './contact-pg/contact-pg.component';

const router:Routes=[
  {path: '', component:MainPgComponent},
  {path: 'about', component:AboutPgComponent},
  {path: 'works', component:WorksPgComponent},
  {path: 'contact', component:ContactPgComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainPgComponent,
    AboutPgComponent,
    WorksPgComponent,
    ContactPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
