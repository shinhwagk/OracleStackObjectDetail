import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

@Injectable()
export class ApiServices {
  private genUrl(name: string): string { return `/api/template/${name}` }

  constructor(private _http: Http) {
  }

  execSql(sql: string, pars: string[]) {
    const url: string = this.genUrl('execsql')
    const body = { dbname: "aaa", sqltext: sql, pars: pars }
    console.info(body)
    return this._http.post(url, JSON.stringify(body), { headers: this.headers }).map((res: Response) => res.json())
  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
}