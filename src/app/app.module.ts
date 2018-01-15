import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../db/in-memory-data.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './controllers/heroes/heroes.component';
import { HeroDetailComponent } from './controllers/heroes/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './controllers/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './config/app-routing.module';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
