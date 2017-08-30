import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AddressComponent} from "./address.component";



@ NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        AddressComponent
    ],
    providers: [],
    bootstrap: [AddressComponent]
})
export class NumberClickModule { }
