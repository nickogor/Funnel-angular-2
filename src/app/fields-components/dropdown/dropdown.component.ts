import { Component } from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.html'
})
export class DropdownComponent extends FieldComponent{

    choosenOption: string;

    constructor(){
        super()
    }

    chooseOption(event):void{
        this.inVal = event.target.getAttribute('data-value');
        this.choosenOption = event.target.innerHTML;
        this.checkValid();
    }

    checkValid(){
        this.setSuccess(this.inVal.length > 0)
    }
}
