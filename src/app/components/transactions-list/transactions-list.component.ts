import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trasnsactionsService } from '../../services/transactions-list-services'


@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  constructor (private route: ActivatedRoute, private _trasnsactionsService : trasnsactionsService) {}
  uuid : string = 'f1b75637-dcca-4596-8ac4-12ff15cdfb1e'
  transactions : any[] | undefined

  ngOnInit(): void {
    (async () => {
      this.route.params.subscribe(params => {
        this.uuid = params['uuid'];
      });
      const transactionsResponse = await this._trasnsactionsService.getTrasnsactions(this.uuid);
      console.log(transactionsResponse);
      this.transactions = transactionsResponse.results;
    })();
  }

}
