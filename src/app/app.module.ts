import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import {GooglePlaceModule} from 'ng2-google-place-autocomplete';

import { AppComponent } from './app.component';
import { StartComponent } from './start.funnel.component/start-funnel.component';
import { DropdownModule } from "ng2-dropdown";
import { MyDatePickerModule } from "mydatepicker/src/my-date-picker/index";
import { RadioMoreComponent } from "./fields-components/radio.more/radioMore.component";
import { NumberClickComponent } from "./fields-components/number.click/numberClick.component";
import { DropdownComponent } from "./fields-components/dropdown/dropdown.component";
import { RadioSimpleComponent } from "./fields-components/radio.simple/radioSimple.component";
import { CurrencyComponent } from "./fields-components/currency.component/currency.component";
import { AddressComponent } from "./fields-components/address.component/address.component";
import { MainDatePickerComponent } from "./fields-components/date.picker.component/date.picker.component";
import { InputTypeComponent } from "./fields-components/input.type.component/input.type.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask";

@ NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        DropdownModule,
        MyDatePickerModule,
        GooglePlaceModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule
    ],
    declarations: [
        AppComponent,
        StartComponent,
        RadioMoreComponent,
        NumberClickComponent,
        DropdownComponent,
        RadioSimpleComponent,
        CurrencyComponent,
        AddressComponent,
        MainDatePickerComponent,
        InputTypeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
