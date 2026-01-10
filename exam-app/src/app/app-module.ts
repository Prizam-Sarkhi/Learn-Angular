import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Demo } from './demo/demo';
import { Highlight } from './highlight';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';
import { PipesDemo } from './pipes-demo/pipes-demo';
import { FormsDemo } from './forms-demo/forms-demo';
import { StudentList } from './student-list/student-list';
import { Login } from './login/login';

@NgModule({
  declarations: [
    App,
    Demo,
    Highlight,
    DataBindingDemo,
    PipesDemo,
    FormsDemo,
    StudentList,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
