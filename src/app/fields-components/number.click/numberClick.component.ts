import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'number-click',
    templateUrl: './numberClick.html'
})
export class NumberClickComponent extends FieldComponent{

    inputVal: number;


    constructor(){
        super();
    }

    ngOnInit(){
       this.setEptyFields();
        this.inputVal = parseInt(this.questionData.firstNumber);
        this.setInVal();
    }

    plusValue():void{
        this.inputVal++;
        this.setInVal();
    }

    minusValue():void{
        this.inputVal--;
        this.setInVal();
    }

    setInVal(){
        let val : number = this.inputVal;
        if( val > 0){
            this.inVal = String(val);
            this.setSuccess(this.inVal.length > 0)
        }
    }
}
