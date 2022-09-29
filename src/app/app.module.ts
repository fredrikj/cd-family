import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { PushParentComponent } from './push-parent/push-parent.component';
import { ChildComponent } from './child/child.component';
import { PushChildComponent } from './push-child/push-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PushParentComponent,
    ChildComponent,
    PushChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
