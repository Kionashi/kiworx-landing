import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  name : string = '';
  email : string = '';
  phone : string = '';
  message : string = ''; 
  ipAddress : any = '';
  userAgent : any = '';
  response : any = '';
  displaySuccessMsg : boolean = false;
  displayErrorMsg : boolean = false;
  errors : any = '';

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService,
    ) {}

  ngOnInit() {
    // Reset contact response
    this.displaySuccessMsg = false;
    this.displayErrorMsg = false;
  }
  getIpCliente() {
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      this.ipAddress = data.ip;
    })
  }
  getUserAgent(){
    return this.deviceService.userAgent;
  }
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }
  onSubmit() {
    // Reset contact response
    this.displaySuccessMsg = false;
    this.displayErrorMsg = false;

    // Set Client IP
    this.getIpCliente();
    var validationFailed = false;
    var errorList = {
      "name": [],
      "email": [],
      "phone": [],
      "message": []
    };
    // Validate fields
    if(this.name == '') {errorList.name.push("The field name is required."); validationFailed = true;}
    if(this.phone == '') {errorList.phone.push("The field phone is required."); validationFailed = true;}
    if(this.email == '') {errorList.email.push("The email must be a valid email address."); validationFailed = true;}
    if(this.message == '') {errorList.message.push("The field message is required."); validationFailed = true;}
    if(!validationFailed) {
      // Store contact
      this.http.post('https://kiworx.net/api/public/api/v1/contact',{
        'email': this.email,
        'name' : this.name,
        'phone' : this.phone,
        'message' : this.message,
        'ip_address' : this.ipAddress,
        'user_agent' : this.getUserAgent()
      }).subscribe(
        response  => {
          // Success
          this.displaySuccessMsg = true;
        },
        error     => {
          // Handle server error
          this.displayErrorMsg = true;
          this.errors = error;
          console.log(error);
        }
      );
    } else {
      this.displayErrorMsg = true;
      this.errors = errorList;
    }
  }

}
