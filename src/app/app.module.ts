import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankListComponent } from './components/bank-list/bank-list.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { WidgetConnectComponent } from './components/widget-connect/widget-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    TransactionsListComponent,
    WidgetConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
