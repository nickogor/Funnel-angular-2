import { Component } from '@angular/core';
import {LogsService} from "./logs.service";
import {Log} from "./log";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'show-logs',
    templateUrl: './logs.html',
    styleUrls: ['./login.css'],
})
export class LogsComponent{

    private LoginSuccess: boolean = false;
    madeStats:boolean = false;
    logs: Log[] = [];
    resultArr: Log[] = [];

    constructor(private logsService: LogsService, private http: HttpClient){

    }

    authSend(){
        let outData = JSON.stringify({user:'scott', password: 'checklog17'});
        this.http.post('https://creditandfinance.com.au/home-loan-story/login.php', outData).subscribe(a => console.log(a));
    }

    runLogs(){
        this.LoginSuccess = true;
        this.logsService.getLogs()
            .then(logs => {
                this.logs = logs;
                this.madeStats = true;
            });
    }

    makeStats(arr){
        let res = [];
        let idIsIn: number[] = [];
        arr.forEach((a) =>{
            let i  = a.userID;
            if (idIsIn.indexOf(i) == -1){
                a.firstTimeStamp = new Date(a.timeStamp).getTime();
                a.timeStamp = new Date(a.timeStamp).getTime();
                res.push(a);
                idIsIn.push(i);
            }else{
                for (let k = 0; k < res.length; k++){
                   if (res[k].userID == i){
                       res[k].timeStamp = new Date(a.timeStamp).getTime();
                       res[k].sections = a.sections;
                       break;
                   }
                }
            }
        });
        this.resultArr = res;
        this.madeStats = false;
        console.log(this.resultArr);
    }


    openQuestion(e){
        console.log()
    }
}
