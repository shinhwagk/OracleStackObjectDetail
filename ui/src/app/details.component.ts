import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QueryService } from './query.service';
import { ConnInfo } from './queryinfo.itf';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [QueryService]
})
export class DetailsComponent implements OnInit {
  detailName: string;

  details = []

  constructor(private route: ActivatedRoute, private qs: QueryService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const obj = params
      const pars: string[] = obj.param.split(",");
      this.detailName = obj.name

      const url = `https://raw.githubusercontent.com/shinhwagk/OracleStackObjectDetail/config/details/${obj.name}/details.json`
      this.qs.configQuery(url).then(details => {
        details.forEach(detail => {
          this.qs.rdbmsQuery(detail.query, pars).then(rs =>
            this.details.push(rs)
          )
        })
      })
    });
  }
}
