import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trasnsactionsService } from '../../services/transactions-list-services'

export interface TransactionInterface { amount: number, description: string }

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  constructor (private route: ActivatedRoute, private _trasnsactionsService : trasnsactionsService) {}
  uuid : string = ''
  dataSource : any[] = []
  displayedColumns : string [] = [ 'name', 'amount' ]

  ngOnInit(): void {
    this.route.params.subscribe(async(params) => {
      this.uuid = params['uuid'];
    });
    (async () => {
        const transactionsResponse = await this._trasnsactionsService.getTrasnsactions(this.uuid);
        this.dataSource = transactionsResponse.results;
        if(!this.dataSource.length){
          window.location.reload()
        }
      })();
  }

}
