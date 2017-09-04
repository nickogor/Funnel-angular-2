import {Component, EventEmitter, Output} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'funnel-type',
    templateUrl: './start-funnel.html',
    styleUrls: ['./start-funnel.css']
})
export class StartComponent {

    @Output() onChooseFunnel = new EventEmitter();
    data: object;


    constructor(private http: HttpClient){
        // Make the HTTP request:
        this.http.get('./assets/in-data/start-buttons.json').subscribe(data => {
            // Read the result field from the JSON response.
            this.data = data;
        });
    }

    startFunnel($event):void{
        this.onChooseFunnel.emit($event.currentTarget.attributes['callfunnel'].value);
    }


}
