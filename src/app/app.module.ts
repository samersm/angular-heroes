import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { HeroesComponent } from './controllers/heroes/heroes.component';
import { HeroDetailComponent } from './controllers/heroes/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './controllers/messages/messages.component';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
