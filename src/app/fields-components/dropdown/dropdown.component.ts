import { Component, Input } from '@angular/core';
import {DataTypeInterface} from "../data-type-interface";

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.html'
})
export class DropdownComponent {
    @Input() questionData: DataTypeInterface;
    choosenOption: string;
    curSelectedVal: string;

    constructor(){

    }

    chooseOption(event):void{
       this.curSelectedVal = event.target.getAttribute('data-value');
       this.choosenOption = event.target.innerHTML;
    }

}
