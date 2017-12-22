import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Factura } from './factura.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FacturaService {

  private entityUrl = 'api/facturas/';

  constructor(private http: Http) {

  }
      getAll(query?: any): Observable<any> {
        const params = new URLSearchParams();
        if (query) {
        params.set('page', query.page);
        params.set('size', query.size);
        }
        return this.http.get(this.entityUrl, { search: params })
          .map(this.checkStatus)
          .catch(this.handleError);
      }


  getById(IdFactura: string): Observable<Factura> {
    return this.http.get(this.entityUrl + IdFactura)
      .map(this.checkStatus)
      .map(response => response.json() as Factura)
      .catch(this.handleError);
  }

  insert(factura: Factura): Observable<any> {
    return this.http.post(this.entityUrl, factura)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  update(IdFactura: string, factura: Factura) {
    return this.http.put(this.entityUrl + IdFactura, factura)
          .map(this.checkStatus)
          .catch(this.handleError);
  }

  delete(IdFactura: string): Observable<any> {
    return this.http.delete(this.entityUrl + IdFactura)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  private checkStatus(response: Response) {
    const status = response.status;
    if (status === 200 || status === 201 || status === 204) {
      return response;
    }
    throw response;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.msg || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log(error);
    return Observable.throw(errMsg);
  }
}
