import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Demo } from './demo/demo';
import { Highlight } from './highlight';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';
import { PipesDemo } from './pipes-demo/pipes-demo';

@NgModule({
  declarations: [
    App,
    Demo,
    Highlight,
    DataBindingDemo,
    PipesDemo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
