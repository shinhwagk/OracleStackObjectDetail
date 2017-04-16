import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { data } from './test.data';

@Injectable()
export class QueryService {

  private queryUrl = '/v1/query/array';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  rdbmsQuery(sqlText: string, args: string[]): Promise<any[][]> {
    const body = { sqlText: sqlText, args: args };
    return this.http.post(this.queryUrl, JSON.stringify(body), this.headers)
      .map(response => response.json().data as any[][])
      .toPromise()
  }
}
