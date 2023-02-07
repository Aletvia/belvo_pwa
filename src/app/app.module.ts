import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
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
    MatGridListModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
