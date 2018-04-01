import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {ResultInterface} from "../interfaces/result-interface";
import {DOCUMENT} from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import {isUndefined} from "util";
import {ActionStatusInterface} from "../interfaces/action-result";



@Component({
  selector: 'funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.css']
})
export class FunnelComponent {

    @Input() funnelObject: object;

    @Output() forLogsInfo = new EventEmitter<ResultInterface>();
    @Output() runAgain = new EventEmitter<ResultInterface>();

    currentPhaseNum: number = 1;
    currentSection: any;
    openedDash : boolean = false;
    shownSectionsIds: number[] = [1];
    funnelSections : any ;
    answerObj : ResultInterface;

    started: boolean = false;

    public actions: {                  // List Of actions for funnel (For Results at the moment)
        [key: string] : boolean
    } = {};

    constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient){
        this.async_load();
      }

    ngAfterViewInit(){
      setTimeout(()=>{
        this.started = true;
      },1);
    }

    ngOnInit(){
        console.log(isUndefined(this.funnelObject));
        if (isUndefined(this.funnelObject)){
            let funnelName = 'funnels';
            this.http.get('./assets/in-data/' + funnelName + '.json').subscribe(data => {
                let a: any = data;
                this.funnelObject = a.funnel.sections;
                this.buildUpResultsArray(this.funnelObject);
                this.funnelSections = this.funnelObject;
                this.updateSection(this.currentPhaseNum);
            });
        }else{
            this.buildUpResultsArray(this.funnelObject);
            this.funnelSections = this.funnelObject;
            this.updateSection(this.currentPhaseNum);
        }
    }

    menuItemClick(e){
    this.updateSection(e.target.getAttribute('secID'));
    this.openedDash = false;
    }

    nextSection(){
        if (this.funnelSections.length > this.currentPhaseNum &&  this.answerObj.sections[this.currentPhaseNum-1].complete){
          this.updateSection(this.currentPhaseNum+1)
        }else{
          document.getElementById('full_name').scrollIntoView();
        }
    }

    private buildUpResultsArray(a){
    let answerObj = {
      sections: []
    };
    a.forEach(item =>{
     let questions = [];
      item.questions.forEach(eachItem =>{
          let name = eachItem.name;
          let id = parseInt(eachItem.id);
          let questionObj = {
            id: id,
            name: name,
            value : "",
            valid : false
          };
          questions.push(questionObj);
      });
      answerObj.sections.push({ id: parseInt(item.id), complete: false,  questions : questions});
    });
    this.answerObj = answerObj;
    }


    private updateSection(v){
    this.currentPhaseNum = parseInt(v);
    this.updateShownIds();
    this.funnelSections.forEach(eachObj =>{
      if (eachObj.id == this.currentPhaseNum){
        this.currentSection = eachObj;
      }
    });
    this.document.body.scrollTop = 0;
    }

    private updateShownIds(){
    if(this.shownSectionsIds.indexOf(this.currentPhaseNum) == -1){
      this.shownSectionsIds.push(this.currentPhaseNum);
    }
    }

    checkRef(question){
      if ( isUndefined(question.ref)){
          return true;
      }else return document.querySelectorAll('[ref-code="' + question.ref + '"]')[0].classList.contains('clicked');
    }

    handleThis(event, section:number = this.currentPhaseNum){

      let sectIndex:number = section-1;
      let questionCount: number = this.answerObj.sections[sectIndex].questions.length;
      let correctCount : number = 0;
      this.answerObj.sections[sectIndex].questions.forEach(item =>{
        if(item.id == event.id && item.name == event.name){
          item.valid = event.valid;
          item.value = event.value;
        }
        if(item.valid == true){
          correctCount++;
        }
      });
      if (questionCount == correctCount){
          this.answerObj.sections[sectIndex].complete = true;
      }else{
          this.answerObj.sections[sectIndex].complete = false;
          while (this.shownSectionsIds.length > this.currentPhaseNum){
              this.shownSectionsIds.pop();
          }
      }
    }

    private async_load(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "//www.productreview.com.au/assets/js/widget/reviews-itemid.js";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    }

    GoToSignup(a){
        console.log(a);
        this.runAgain.emit(a)
    }

    HandleAction(action: ActionStatusInterface){
        this.actions[action.action] = action.status;

    }

}