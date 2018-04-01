import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { CharttableComponent } from './charttable/charttable.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopchartComponent } from './topchart/topchart.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    SidebarComponent,
    CharttableComponent,
    TopchartComponent
  ],
  imports: [  
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { 
        enabled: environment.production 
      })
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    SidebarComponent,
    CharttableComponent,
    TopchartComponent
  ]
})

export class AppModule { }
