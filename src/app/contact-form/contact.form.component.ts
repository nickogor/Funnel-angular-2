import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'contact-form',
  templateUrl: './contact.form.component.html',
  styleUrls: ['./contact.form.component.css'],
})

export class ContactFormCompoent {

  public signinForm = new FormGroup({
    name: new FormControl("", this.nameValidator),
    phone: new FormControl("", this.telValidator)
  });
  formValidated: boolean = true;
  sentData: boolean = false;

    name: boolean = true;
    phone: boolean = true;


  constructor(private http: HttpClient){

  }

  HandleSubmit(e){
    console.log(this.signinForm.controls.phone.valid);
    if(this.signinForm.valid){
      this.formValidated = true;
      this.sentData = true;
      this.sendDatafunc();
    }else{
      this.name = this.signinForm.controls.name.valid;
      this.phone = this.signinForm.controls.phone.valid;
    }
    // return false;
  }

  sendDatafunc(){
    if (this.sentData){
      let link = "https://hooks.zapier.com/hooks/catch/71065/8y6ggp/?name="+this.signinForm.value.name+"&phone="+this.signinForm.value.phone+"&email="+this.signinForm.value.email+"&password="+this.signinForm.value.password+"&utm_campaign="+this.findGetParameter("utm_campaign")+"&utm_source="+this.findGetParameter("utm_source");
      this.http.get(link).subscribe(data =>{console.log(data)});
      setTimeout(()=>{
        location.replace("https://homeloan.creditandfinance.com.au/comparison-results/");
      }, 1000)
    }
  }

  nameValidator(c: FormControl){
    if(c.value.length < 3){
      return {noLength: true};
    }else{
      return null;
    }
  }

  telValidator(c: FormControl){
    let reg = RegExp(/^\d+$/);
    if(!reg.test(c.value) || c.value.length < 5){
      return {noMatch: true};
    }else{
    }
  }




  private findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }

}