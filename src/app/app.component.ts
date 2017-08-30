import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResultInterface, SectionInterface} from "./interfaces/result-interface";
import {AnswerTypesInterface} from "./interfaces/answer-types-interface";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentPhaseNum: number = 1;
  currentSection: any;
  openedDash : boolean = false;

  shownSectionsIds: number[] = [1];

  funnelSections : any ;

  answerObj : ResultInterface;

  //
  // employmentQuestion: object;
  // dependantsQuestion: object;
  // materialStatusQuestion: object;
  // usedPropertyQuestion: object;
  // propertyWorthQuestion: object;
  // AddressQuestion: object;
  // BirthDayQuestion: object;
  // PhoneNumberQuestion: object;
  // EmailQuestion: object;
  // FullNameQuestion: object;




  constructor(private http: HttpClient){
    // Make the HTTP request:
    this.http.get('./assets/in-data/Funnel.json').subscribe(data => {
      let a: any = data;
      this.buildUpResultsArray(a.funnel.sections);
      this.funnelSections = a.funnel.sections;
      this.updateSection(this.currentPhaseNum)
    });

    // this.http.get('./assets/in-data/employment-status.json').subscribe(data => {
    //   this.employmentQuestion = data;
    // });
    // this.http.get('./assets/in-data/numberClick.json').subscribe(data => {
    //   this.dependantsQuestion = data;
    // });
    // this.http.get('./assets/in-data/maritalStatus.json').subscribe(data => {
    //   this.materialStatusQuestion = data;
    // });
    // this.http.get('./assets/in-data/usedProp.json').subscribe(data => {
    //   this.usedPropertyQuestion = data;
    // });
    // this.http.get('./assets/in-data/propertyWorth.json').subscribe(data => {
    //   this.propertyWorthQuestion = data;
    // });
    // this.http.get('./assets/in-data/address.json').subscribe(data => {
    //   this.AddressQuestion = data;
    // });
    // this.http.get('./assets/in-data/datePicker.json').subscribe(data => {
    //   this.BirthDayQuestion = data;
    // });
    // this.http.get('./assets/in-data/phoneNumber.json').subscribe(data => {
    //   this.PhoneNumberQuestion = data;
    // });
    // this.http.get('./assets/in-data/email.json').subscribe(data => {
    //   this.EmailQuestion = data;
    // });
    // this.http.get('./assets/in-data/fullName.json').subscribe(data => {
    //   this.FullNameQuestion = data;
    // });
  }

  ngOnInit(){

  }

  menuItemClick(e){
    this.updateSection(e.target.getAttribute('secID'))
  }

  nextSection(){
    if (this.funnelSections.length > this.currentPhaseNum &&  this.answerObj.sections[this.currentPhaseNum-1].complete){
      this.updateSection(this.currentPhaseNum+1)
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
  }

  private updateShownIds(){
    if(this.shownSectionsIds.indexOf(this.currentPhaseNum) == -1){
      this.shownSectionsIds.push(this.currentPhaseNum);
    }
  }


  handleThis(event){
    if(event.section == this.currentPhaseNum){
      let questionCount: number = this.answerObj.sections[this.currentPhaseNum-1].questions.length;
      let correctCount : number = 0;
      this.answerObj.sections[this.currentPhaseNum-1].questions.forEach(item =>{

        if(item.id == event.id && item.name == event.name){
          item.valid = event.valid;
          item.value = event.value;
        }
        if(item.valid == true){
          correctCount++;
        }

        if (questionCount == correctCount){
           this.answerObj.sections[this.currentPhaseNum-1].complete = true;
        }
      });
      this.answerObj.sections[this.currentPhaseNum-1].complete;
    }
  }


}