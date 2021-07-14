import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
msgs:any;
  constructor(private formBuilder:FormBuilder, private contactService:ContactService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      message: ['', [Validators.minLength(22), Validators.required]],
      name: ['', [Validators.minLength(5), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      subject: ['', [Validators.minLength(12), Validators.required]],
    
    });
  }
  sendMsg(msg:any){
    this.contactService.addMsg(msg).subscribe(
      (data) => {
        console.log('Data from BE ',data);

      }
    )
  }

}
