import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { data } from './test.data';

import { QueryInfo, ConnInfo } from './queryinfo.itf';

@Injectable()
export class QueryService {

  private queryUrl = '/query/array';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  rdbmsQuery(sqlText: string, args: any[]): Promise<Array<string>[]> {
    const conninfo: ConnInfo = {
      jdbcUrl: 'jdbc:oracle:thin:@10.65.193.38:1521/func3',
      username: 'system',
      password: 'oracle1171'
    };
    const queryinfo: QueryInfo = {
      ci: conninfo,
      sqlText: sqlText,
      parameters: <string[]>args
    };
    const body = queryinfo;
    return this.http.post(this.queryUrl, JSON.stringify(body), { headers: this.headers })
      .map(response => response.json())
      .toPromise();
  }
}
