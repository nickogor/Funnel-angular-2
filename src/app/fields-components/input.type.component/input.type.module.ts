import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PhoneNumberComponent} from "./phone.number.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        PhoneNumberComponent
    ],
    providers: [],
    bootstrap: [PhoneNumberComponent]
})
export class PhoneNumberModule { }
