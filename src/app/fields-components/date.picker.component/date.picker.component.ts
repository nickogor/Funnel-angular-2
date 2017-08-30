import {Component} from '@angular/core';
import {FieldComponent} from "../../interfaces/field-component-interface";
import {IMyDpOptions, IMyDateModel, IMyInputFieldChanged, IMyDefaultMonth} from 'mydatepicker/src/my-date-picker';

@Component({
    selector: 'date-picker',
    templateUrl: './date.picker.html'
})
export class MainDatePickerComponent extends FieldComponent{

    private defaultMonth: IMyDefaultMonth = {
        defMonth: ''
    };
    private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
        markCurrentYear: false,
        selectorWidth: "100%",
        showTodayBtn: false
    };

    constructor(){
        super();
    }

    ngOnInit(){
        this.setEptyFields();
        this.defaultMonth.defMonth = this.questionData.defaultMonth;
        this.myDatePickerOptions.disableSince = this.questionData.disableSince;
        this.myDatePickerOptions.editableDateField = this.questionData.editableDateField;
        this.myDatePickerOptions.maxYear = this.questionData.maxYear;
        this.myDatePickerOptions.minYear = this.questionData.minYear;
    }


    onInputFieldChanged(event: IMyInputFieldChanged) {
        console.log(event);
        this.inVal = event.value;
        this.setSuccess(event.valid);
    }


}
