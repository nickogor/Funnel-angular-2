import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'radio-simple',
    templateUrl: './radioSimple.html'
})
export class RadioSimpleComponent extends FieldComponent{

    compStyle: string;

    constructor(){
        super();
    }


    ngOnInit(){
        this.setEptyFields();
        this.compStyle = this.questionData.options.length > 2?"more-radio":"double-radio";
    }

    toggleRadio(event){
        this.inVal = event.target.value;
        this.CheckValid()
    }

    CheckValid(){
        this.setSuccess(this.inVal.length > 0);
    }

}
