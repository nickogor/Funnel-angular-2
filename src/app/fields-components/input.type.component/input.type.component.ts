import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'phone-number',
    templateUrl: './phone.number.html'
})
export class PhoneNumberComponent extends FieldComponent{

    inputVal: number;


    constructor(){
        super();
    }

    ngOnInit(){
        this.questionAnswer.name = this.questionData.name;
        this.inputVal = parseInt(this.questionData.firstNumber);
    }

}
