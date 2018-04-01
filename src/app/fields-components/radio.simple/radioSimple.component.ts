import {Component, EventEmitter, Output} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'radio-simple',
    templateUrl: './radioSimple.html'
})
export class RadioSimpleComponent extends FieldComponent{

    compStyle: string;
    currentAction: string;

    // reff: string = this.questionData.ref?this.questionData.ref:"";
    // refStatus: boolean = false;

    constructor(){
        super();
    }


    ngOnInit(){
        this.setEptyFields();
        this.compStyle = this.questionData.options.length > 2?"more-radio":"double-radio";
    }

    toggleRadio(event){
        if(event.target.hasAttribute('data-action')){
            this.currentAction = event.target.getAttribute('data-action');
        }
        if(this.currentAction){
            this.ImportantAction.emit({status: event.target.hasAttribute('data-action'), action: this.currentAction});
        }
        this.inVal = event.target.value;
        this.CheckValid()
    }

    CheckValid(){
        this.setSuccess(this.inVal.length > 0);
    }

}
