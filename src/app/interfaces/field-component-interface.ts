import {EventEmitter, Input, Output} from '@angular/core';
import {DataTypeInterface} from "./data-type-interface";
import {AnswerTypesInterface} from "./answer-types-interface";

export class FieldComponent {
    @Input() questionData: DataTypeInterface;
    @Input() currSection: number;
    @Output() onHasAnswer = new EventEmitter<AnswerTypesInterface>();
    questionAnswer: AnswerTypesInterface = {
        id: 0,
        name:'',
        section: 0,
        value:'',
        valid : false};
    isSuccess: boolean = false;
    isError: boolean = false;
    inVal: string = '';


    ngOnInit( ) {
        this.setEptyFields();

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
        }else {
            this.questionAnswer.value = this.inVal;
            this.onHasAnswer.emit(this.questionAnswer);
        }
    }
}