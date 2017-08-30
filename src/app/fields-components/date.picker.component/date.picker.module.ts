import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainDatePickerComponent } from "./date.picker.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MainDatePickerComponent
    ],
    providers: [],
    bootstrap: [MainDatePickerComponent]
})
export class MainDatePickerModule { }
