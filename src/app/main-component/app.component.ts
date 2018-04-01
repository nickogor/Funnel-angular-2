import { Component } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppMainComponent {

    private readonly countdown = 6;
    UserId: number;

    bottomHeight: string = '200px';
    fileName: string = '';
    funnelObject : object = {};
    starting: boolean = false;
    logData: any = {asd: "sad"};

    signup:boolean = false;

    started: boolean = false;
    activeSlide: number = 1;

    intervalID: any;
    seconds: number = 10;

    funnelName: string = '';

    loadScreenOpacity: number = 1;
    displayNone: string = "block";




  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){
    let d = new Date();
    this.UserId = d.getTime();
  }


  ChildLoaded(){
       setTimeout(()=> {
      this.bottomHeight = 'calc(100vh - ' + (document.getElementById('First').clientHeight+document.getElementById('Over').clientHeight)+ 'px)';
      this.loadScreenOpacity = 0;
      setTimeout(()=>{this.displayNone="none"},500);
    }, 100);
  }

  RunFunnel(event){
    this.starting = true;
    this.funnelName = event;
    switch (this.funnelName) {
        case 'onboard':
            this.intervalID = setInterval(() => this.tick(), 1000);
            setTimeout(() => {
                this.started = true;
                this.starting = false
            }, 500);
            break;
        case 'signup':
            console.log(true);
            this.started = true;
            this.signup = true;
            this.starting = false;
            clearTimeout(this.intervalID);
            this.router.navigate(['/sign-up']);
            break;
        default :
            this.funnelName = 'funnels';
            this.http.get('./assets/in-data/' + this.funnelName + '.json').subscribe(data => {
                let a: any = data;
                this.funnelObject = a.funnel.sections;
                this.fileName = event;
                this.loadScreenOpacity = 0;
                this.router.navigate(['/funnel']);
                clearTimeout(this.intervalID);
            });
            break;
    }

  }


  UpdateLogs(event){
    let d = new Date();
    let hours = d.getHours();
    let minutes = "0" + d.getMinutes();
    let seconds = "0" + d.getSeconds();
    let formattedTime = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() +"T"+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) ;
    let a: any = {};
    a.sections = event.sections;
    a.userID = this.UserId;
    a.timeStamp = formattedTime;
    this.logData = a;


    let outData = JSON.stringify(this.logData);
    this.http.post('./logsHandler.php', outData).subscribe();
  }

  NextSection(){
    this.activeSlide < 3?this.activeSlide++:this.RunFunnel('funnels');
  }

  ChangeSection(n){
    this.activeSlide = n;
    this.seconds = this.countdown;
  }

  private tick(): void{
    if(--this.seconds < 1){
      this.NextSection();
      this.seconds = this.countdown;
    }
  }





}