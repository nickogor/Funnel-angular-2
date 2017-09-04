import {Component, Inject, Input} from '@angular/core';
import {ResultInterface} from "../interfaces/result-interface";
import {DOCUMENT} from '@angular/platform-browser';



@Component({
  selector: 'funnel',
  templateUrl: './funnel.component.html',
})
export class FunnelComponent {

  @Input() funnelObject: object;

  currentPhaseNum: number = 1;
  currentSection: any;
  openedDash : boolean = false;
  shownSectionsIds: number[] = [1];
  funnelSections : any ;
  answerObj : ResultInterface;

  started: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document){

  }

  ngAfterViewInit(){
      setTimeout(()=>{
        this.started = true;
      },1);
  }

  ngOnInit(){
      this.buildUpResultsArray(this.funnelObject);
      this.funnelSections = this.funnelObject;
      console.log(this.funnelSections, 'ahha');
      this.updateSection(this.currentPhaseNum);

  }

  menuItemClick(e){
    this.updateSection(e.target.getAttribute('secID'));
    this.openedDash = false;
  }

  nextSection(){
    if (this.funnelSections.length > this.currentPhaseNum &&  this.answerObj.sections[this.currentPhaseNum-1].complete){
      this.updateSection(this.currentPhaseNum+1)
    }else{
      console.log(this.currentSection);
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
    console.log(this.answerObj);
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
        if (questionCount == correctCount){
          this.answerObj.sections[sectIndex].complete = true;
        }else{
          this.answerObj.sections[sectIndex].complete = false;
          while (this.shownSectionsIds.length > this.currentPhaseNum){
            this.shownSectionsIds.pop();
          }
        }

      });
  }


}