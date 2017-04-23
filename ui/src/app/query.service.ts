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

  rdbmsQuery(conn: ConnInfo, sqlText: string, args: any[]): Promise<Array<string>[]> {
    const queryinfo: QueryInfo = {
      ci: conn,
      sqlText: sqlText,
      parameters: <string[]>args
    };
    const body = queryinfo;
    return this.http.post(this.queryUrl, JSON.stringify(body), { headers: this.headers })
      .map(response => response.json())
      .toPromise();
  }

  configQuery(url:string) {
    return this.http.get(url).map(response => response.json())
      .toPromise();
  }
}
