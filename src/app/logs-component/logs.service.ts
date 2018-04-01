import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Log} from "./log";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LogsService {

    private heroesUrl = 'assets/logs/logs.json';

    constructor(private http: HttpClient) { }

    getLogs(): Promise<Log[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}