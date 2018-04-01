import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  getTableData(): Observable<any> {
    return this._http.get('./assets/table_data.json')
      .map(result => result);
  }

  getChartData(): Observable<any> {
    return this._http.get('./assets/chart_data.json')
      .map(result => result);
  }

}
