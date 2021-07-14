import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
chefs:any;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.userService.getChefByRole().subscribe(
      (data)=>{
        this.chefs = data.findedChefs;
      }
    );
  }
  }


