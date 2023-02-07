import { Component, OnInit } from '@angular/core';
import { bankService } from '../../services/banks-list-services'

export interface BankInterface { id: number, name: string, logo: string }

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  banks: BankInterface[] | undefined;

  constructor (private _bankService : bankService) {}

  ngOnInit(): void {
    (async () => {
      const banksResponse = await this._bankService.getBanks();
      console.log(banksResponse);
      this.banks = banksResponse.results;
    })();
  }

}
