import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {
msgs:any;
id:any;
  constructor(private contactService:ContactService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.contactService.getAllMsg().subscribe(
      (data)=>{
        this.msgs = data.findedMsgs;
      }
    );
  }
  // answerMsg(){
  //   this.id = this.activatedRoute.snapshot.paramMap.get('id');

  // }

 

}
