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
  isVisible : boolean = false;

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService,
    ) { }

  ngOnInit() {
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

  onSubmit() {
    // Set Client IP
    this.getIpCliente();

    // Validate email is set
    if(this.email != ''){

      // Store contact
      this.http.post('https://kiworx.net/api/public/api/v1/contact',{
        'email': this.email,
        'name' : this.name,
        'phone' : this.phone,
        'message' : this.message,
        'ip_address' : this.ipAddress,
        'user_agent' : this.getUserAgent()
      }).subscribe(response =>{
      })
      this.isVisible = true;
    }
  }

}
