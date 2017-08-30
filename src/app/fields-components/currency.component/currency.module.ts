import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CurrencyComponent} from "./currency.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        CurrencyComponent
    ],
    providers: [],
    bootstrap: [CurrencyComponent]
})
export class CurrencykModule { }
