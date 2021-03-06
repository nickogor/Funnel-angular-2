import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {FunnelModule} from "./funnel.component/funnel.module";

import {StartComponent} from './start.funnel.component/start-funnel.component';
import {FunnelComponent} from "./funnel.component/funnel.component";


import { GooglePlaceModule } from 'ng2-google-place-autocomplete';

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
import {LogsComponent} from "./logs-component/logs-component";
import {AppMainComponent} from "./main-component/app.component";
import {LogsService} from "./logs-component/logs.service";
import {ContactFormCompoent} from "./contact-form/contact.form.component";

const appRoutes: Routes= [
    {
        path: 'admin',
        component : LogsComponent
    },
    {
        path: 'funnel',
        component : FunnelComponent
    },
    {
        path: 'home',
        component : AppMainComponent
    },
    {
        path: 'sign-up',
        component : ContactFormCompoent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@ NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        DropdownModule,
        MyDatePickerModule,
        GooglePlaceModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}  // turn off later
        )
    ],
    declarations: [
        AppComponent,
        StartComponent,
        FunnelComponent,
        RadioMoreComponent,
        NumberClickComponent,
        DropdownComponent,
        RadioSimpleComponent,
        CurrencyComponent,
        AddressComponent,
        MainDatePickerComponent,
        InputTypeComponent,
        AppMainComponent,
        LogsComponent,
        ContactFormCompoent
    ],
    providers: [LogsService],
    bootstrap: [AppComponent],
    schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
