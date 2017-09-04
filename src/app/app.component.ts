import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  bottomHeight:string = '200px';
  fileName:string = '';
  funnelObject : object = {};
  starting:boolean = false;

  constructor(private http: HttpClient){
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.bottomHeight = 'calc(100vh - ' + (document.getElementById('First').clientHeight+document.getElementById('Over').clientHeight)+ 'px)';
    }, 1)
  }

  RunFunnel(event){
    this.starting = true;
    setTimeout(()=> {
      this.http.get('../assets/in-data/' + event + '.json').subscribe(data => {
        let a: any = data;
        this.funnelObject = a.funnel.sections;
        this.fileName = event;
      });
    }, 500);
  }
}