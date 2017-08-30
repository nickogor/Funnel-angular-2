import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'double-radio',
    templateUrl: './doubleRadio.html'
})
export class DoubleRadioComponent extends FieldComponent{

    compStyle: string;

    constructor(){
        super();
    }


    ngOnInit(){
        this.questionAnswer.name = this.questionData.name;
        this.compStyle = this.questionData.options > 2?"more-radio":"double-radio";
    }

    toggleRadio(event){
        this.inVal = event.target.value;
        this.CheckValid()
    }

    CheckValid(){
        this.setSuccess(this.inVal.length > 0);
    }

}
