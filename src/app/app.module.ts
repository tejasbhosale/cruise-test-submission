import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { LoginFormComponentComponent } from './components/login-form-component/login-form-component.component';
import { LogoutComponentComponent } from './components/logout-component/logout-component.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FinalPageComponent } from './components/final-page/final-page.component';
import { CruiseTilesComponent } from './components/cruise-tiles/cruise-tiles.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { AboutComponentComponent } from './components/about-component/about-component.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: 'welcome', component: WelcomeComponentComponent },
  { path: 'login', component: LoginFormComponentComponent },
  { path: 'logout', component: LogoutComponentComponent },
  { path: 'final', component: FinalPageComponent },
  { path: 'cruises', component: CruiseTilesComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    LoginFormComponentComponent,
    PageNotFoundComponent,
    LogoutComponentComponent,
    WelcomeComponentComponent,
    FinalPageComponent,
    CruiseTilesComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
