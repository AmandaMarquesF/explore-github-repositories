import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PullRequestsComponent } from './pages/pull-requests/pull-requests.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PullRequestsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule

  ],
  providers: [],
  exports:[PullRequestsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
