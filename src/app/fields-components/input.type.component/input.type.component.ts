import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";
import {FormControl}  from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
    selector: 'input-type',
    templateUrl: './input.type.html'
})


export class InputTypeComponent extends FieldComponent{


    inputVal: string;
    inType : string;
    pattern: string;
    topStyle : string;
    smallClass : string;
    validatingFunction : any;
    guide : boolean = false;
    mask: Array<string | RegExp>;
    _textMask : any = {
        mask: this.mask ,
        guide: this.guide,
        placeholderChar: '\u2000'
    };



    constructor(){
        super();
    }

    ngOnInit(){
        this.setEptyFields();

        switch(this.questionData.input_type){
            case 'phone-number':
                this.inType = 'tel';
                this.pattern = "\d*";
                this.topStyle = "tel-input";
                this.smallClass = "phone-input";
                this.validatingFunction = this.validateTel;
                this._textMask.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                this.guide = true;
                break;
            case 'email':
                this.inType = 'text';
                this.validatingFunction = this.validateEmail;
                this._textMask.mask = false;
                break;
            case 'full-name':
                this.inType = 'text';
                this.validatingFunction = this.validateFullName;
                this._textMask.mask = false;
                break;
                    /**
                     * Currency
                     */
            case 'currency':
                this.inType = 'tel';
                this.pattern = "\d*";
                this.smallClass = "currency-input";
                this.validatingFunction = this.validateCurr;
                this._textMask.mask = numberMask;
                break;
            default:
                this.inType = 'text';
                this.validatingFunction = this.validateText;
                break;
        }
    }

    onKeyUp(e){
        this.setInVal(e.target.value);
    }

    setInVal(val){
        this.inVal = val;
        this.setSuccess(this.validatingFunction());
    }

    validateTel(val:string = this.inVal):boolean{
        return  (val.replace(/\D/g, '').length == 10 );
    }

    validateEmail(val:string  = this.inVal):boolean{
        return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])))$/.test(val);

    }

    validateFullName(val:string  = this.inVal):boolean{
        return (val.length >= 4 && /[A-Za-z]+(\s[A-Za-z]+)+(\s[A-Za-z]+)?/.test(val));
    }

    validateText(val:string  = this.inVal):boolean{
        return val.length > 1;
    }

    /**
     * Currency Validating **/
    validateCurr(val:string  = this.inVal){
        return val.length > 4;
    }

}


const numberMask = createNumberMask({
    prefix: ''
});