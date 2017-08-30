import {Component, Input} from '@angular/core';
import {DataTypeInterface} from "../data-type-interface";
import {isUndefined} from "util";

@Component({
    selector: 'currency',
    templateUrl: './currency.html'
})
export class CurrencyComponent {
    @Input() questionData: DataTypeInterface;
    inpValue: string = "";
    cursorPos : number;
    comas: number = 0;
    success : boolean = false;

    constructor(){}



    ValidateField(event){
        event.stopPropagation();

        var keyVal = event.key;
        var currVal = this.inpValue;
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
        this.inpValue = currVal;
        let comasCount = (this.inpValue.split(",").length - 1);
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

    CheckValid(input = this.inpValue){
        this.success = /(?=(\d\d\d)+(?!\d))/.test(input);
    }
}
