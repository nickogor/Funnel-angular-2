import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FieldComponent} from "../../interfaces/field-component-interface";


@Component({
    selector: 'address-input',
    templateUrl: './address.html'
})
export class AddressComponent extends FieldComponent{

    didClick : boolean = false;
    coords: any;
    geoCodingData: any;
    isLoading : boolean = false;


    constructor(private http: HttpClient){
        super()
    }


    ngOnInit( ) {

        this.setEptyFields();

        if (!!navigator.geolocation) {
            // Support
            this.isLoading = true;
            let geo = navigator.geolocation;
            geo.getCurrentPosition(position => {
                this.coords = position.coords;
                let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.coords.latitude+','+this.coords.longitude+'&key=AIzaSyBsPwQSMMupxRukhijpwlgt782u7ZNXmZo&language=en';
                this.http.get(url).subscribe(data => {
                    this.isLoading = false;
                    this.SetAddress(data);
                    this.CheckValid(this.inVal);
                });
            });
        } else {
            // No support
            console.log('No support');
        }
    }
    SetAddress(data:any):void{
;
        if(data.error_message){
            console.log(data.error_message);
            this.UpdateValue('');
        }else if (data.results.length > 0){
            this.geoCodingData = data.results[0];
            this.UpdateValue(this.geoCodingData.formatted_address);
        }
        this.CheckValid();
    }

    UpdateValue(val){
        this.inVal = val;
    }

    ClickHandle(e){
        if(!this.didClick){
            this.didClick = true;
            e.target.setSelectionRange(0, e.target.value.length)
        }
        this.CheckValid(e.target.value);
    }

    getAddress(event){
        this.CheckValid(event.formatted_address);
        event.blur;
    }

    CheckValid(val = this.inVal){
        this.isSuccess = true;
        this.UpdateValue(val);
        if(val.length > 5){
            this.isLoading = true;
            this.isSuccess = true;
            let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+val+'&language=en&key=AIzaSyBsPwQSMMupxRukhijpwlgt782u7ZNXmZo';
            this.http.get(url).subscribe(data => {
                this.isLoading = false;
                let res: any = data;
                this.setSuccess(res.status == "OK");
            });
        }else {

            this.setSuccess(false);
        }
    }
    CheckValidHandler(e){
        this.isSuccess = true;
        this.UpdateValue(e.target.value);
        if(e.target.value.length > 5){
            this.isLoading = true;
            this.isSuccess = true;
            let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+e.target.value+'&language=en&key=AIzaSyBsPwQSMMupxRukhijpwlgt782u7ZNXmZo';
            this.http.get(url).subscribe(data => {
                this.isLoading = false;
                let res: any = data;
                this.setSuccess(res.status == "OK");
            });
        }else {

            this.setSuccess(false);
        }
    }
}
