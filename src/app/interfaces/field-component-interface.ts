import {EventEmitter, Input, Output} from '@angular/core';
import {DataTypeInterface} from "./data-type-interface";
import {AnswerTypesInterface} from "./answer-types-interface";
import {ActionStatusInterface} from "./action-result";

export class FieldComponent {
    @Input() questionData: DataTypeInterface;
    @Input() currSection: number;
    @Output() onHasAnswer = new EventEmitter<AnswerTypesInterface>();
    @Output() onValidField = new EventEmitter<AnswerTypesInterface>();
    @Output() ImportantAction =  new EventEmitter<ActionStatusInterface>();
    questionAnswer: AnswerTypesInterface = {
        id: 0,
        name:'',
        section: 0,
        value:'',
        valid : false};
    isSuccess: boolean = false;
    isError: boolean = false;
    inVal: string = '';
    ref: boolean = true;

    lastSuccess:boolean = false;


    ngOnInit( ) {
        this.setEptyFields();
        console.log(document.querySelectorAll('[ref-code="3_1_1"]'));
        console.log(this.questionData.ref);

    }
    setEptyFields(){
        this.questionAnswer.name = this.questionData.name;
        this.questionAnswer.id = this.questionData.id;
        this.questionAnswer.section = this.currSection;

    }

    setSuccess(val:boolean){
        this.isSuccess = val;
        this.isError = !val;
        this.questionAnswer.valid = val;
        if(val){
            this.questionAnswer.value = this.inVal;
            this.onHasAnswer.emit(this.questionAnswer);
            if(this.lastSuccess != this.isSuccess){
                this.onValidField.emit(this.questionAnswer);
                this.lastSuccess = this.isSuccess;
            }
        }else {
            this.questionAnswer.value = this.inVal;
            this.onHasAnswer.emit(this.questionAnswer);
            if(this.lastSuccess != this.isSuccess){
                this.lastSuccess = this.isSuccess;
            }
        }
    }
}