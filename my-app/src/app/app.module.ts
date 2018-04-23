import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Hola001Component } from './hola001/hola001.component';
import { Hola002Component } from './hola002/hola002.component';
import { Hola003Component } from './hola003/hola003.component';
import { Hola004Component } from './hola004/hola004.component';
import { Hola005Component } from './hola005/hola005.component';
import { Hola006Component } from './hola006/hola006.component';


@NgModule({
  declarations: [
    AppComponent,
    Hola001Component,
    Hola002Component,
    Hola003Component,
    Hola004Component,
    Hola005Component,
    Hola006Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
