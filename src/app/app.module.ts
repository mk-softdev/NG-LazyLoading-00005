import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalModule } from './normal/normal.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ChildComponent } from './viewchild/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    ViewchildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NormalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
