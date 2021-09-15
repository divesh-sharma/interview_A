import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent,ChildComponent,CustomPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
