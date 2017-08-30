import {Component, EventEmitter, Input, Output} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'radio-more',
    templateUrl: './radioMore.html'
})

export class RadioMoreComponent {

    @Input() questionData: any;
    @Output() onHaveAnswer = new EventEmitter();

    validSuccess : boolean = false;
    answer: string = "";
    private  clicked: number;
    private choosen: number = 0;
    private counterBlocks:  MyType = {};

    constructor() {

    }
    ngOnInit() {
        var obg = this.questionData;
        obg.children.forEach(eachObg => {
           this.counterBlocks[eachObg.parent_id] = this.counterBlocks[eachObg.parent_id]? this.counterBlocks[eachObg.parent_id]+1 : 1 ;
        });
    };

    OpenParentRadio(event):void{
        var target = event.target || event.srcElement || event.currentTarget;
        this.clicked = target.parentElement.getAttribute('mainID');
        this.EmptyAnswer();
        this.DoCheck();
    };
    ChooseInput(event):void{
        var target = event.target || event.srcElement || event.currentTarget;
        this.choosen = target.parentElement.getAttribute('childID');
        this.answer = target.value;
        this.DoCheck()
    }

    DoCheck():void{
        if (this.choosen != 0 && this.answer != ""){
            this.onHaveAnswer.emit(this.answer);
        }
    }

    EmptyAnswer(){
        this.choosen = 0;
        this.answer = '';
    }

    private getHeight(parentId){
        return String(this.counterBlocks[parentId]*50+53)+"px";
    }
}


interface MyType {
    [key: string]: number
}