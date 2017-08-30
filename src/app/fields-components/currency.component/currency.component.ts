import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";

@Component({
    selector: 'currency',
    templateUrl: './currency.html'
})
export class CurrencyComponent extends FieldComponent{
    cursorPos : number;
    comas: number = 0;

    constructor(){
        super()
    }



    ValidateField(event){
        event.stopPropagation();

        var keyVal = event.key;
        var currVal = this.inVal;
        if (keyVal === "ArrowLeft") {
            this.cursorPos = this.cursorPos > 0 ? this.cursorPos - 1 : 0;
        } else if (keyVal === "ArrowRight") {
            this.cursorPos++;
        } else if (keyVal === "Backspace") {
            if(this.cursorPos > 0){
                currVal = currVal.slice(0, this.cursorPos - 1) + currVal.slice(this.cursorPos);
                this.cursorPos--;
            }else{
                return false;
            }
        } else {
            if (keyVal.replace(/\D/g, '') != '') {
                if (this.cursorPos == 0 && keyVal == 0){
                    return false;
                }
                currVal = currVal.slice(0, this.cursorPos) + keyVal + currVal.slice(this.cursorPos);
                this.cursorPos++
            }
        }
        currVal = currVal.replace(/\D/g,'').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        this.inVal = currVal;
        let comasCount = (this.inVal.split(",").length - 1);
        if (this.comas < comasCount){
            this.cursorPos++;
            this.comas = comasCount;
        }else if(this.comas > comasCount){
            this.cursorPos--;
            this.comas = comasCount;
        }
        event.target.selectionStart = this.cursorPos;
        return false;
    }

    GetCursorPos(e){
        this.cursorPos = e.target.selectionStart;
    }

    MoveCaret(e){
        var tar = e.target;
        tar.focus();
        tar.setSelectionRange(this.cursorPos, this.cursorPos);
        this.CheckValid(tar.value);
    }

    CheckValid(input = this.inVal){
        this.setSuccess(/(?=(\d\d\d)+(?!\d))/.test(input));
    }
}
