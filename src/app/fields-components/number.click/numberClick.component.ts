import {Component, Input} from '@angular/core';
import {DataTypeInterface} from "../data-type-interface";

@Component({
    selector: 'number-click',
    templateUrl: './numberClick.html'
})
export class NumberClickComponent {
    @Input() questionData: DataTypeInterface;
    inputVal: number;


    constructor(){}

    getInVal(value):number{
        this.inputVal = this.inputVal?this.inputVal:value;
        return this.inputVal;
    }

    plusValue():void{
        this.inputVal++;
    }

    minusValue():void{
        this.inputVal--;
    }
}
