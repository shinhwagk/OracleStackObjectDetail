import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

@Injectable()
export class ApiServices {
  private genUrl(name: string): string { return `/api/template/${name}` }

  constructor(private _http: Http) {
  }


  // template table
  t_table(pars: string[], name: string ) {
    const url: string = this.genUrl(name)
    const body = { dbname: "aaa", pars: pars }
    console.info(body)
    return this._http.post(url, JSON.stringify(body), { headers: this.headers }).map((res: Response) => res.json())
  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
}