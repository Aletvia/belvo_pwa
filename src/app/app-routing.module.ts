import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetConnectComponent } from './components/widget-connect/widget-connect.component'
import { BankListComponent } from './components/bank-list/bank-list.component'
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component'

const routes: Routes = [
  {
    path: 'connecting',
    component: WidgetConnectComponent
  },
  {
    path: 'banks',
    component: BankListComponent
  },
  {
    path: 'transactions/:uuid',
    component: TransactionsListComponent
  }
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  }
)
export class AppRoutingModule { }
