import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
@Input() chefInput:any;
 

  constructor(private router:Router) { }

  ngOnInit() {
  
  }
  getPlatByCh(id){
    this.router.navigate([ `plats-details/${id}`]);

  }
}