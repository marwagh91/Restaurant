import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  plats:any;
  plat:any={};

  constructor(private router:Router, private formBuilder:FormBuilder , private platsService:PlatsService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      name: [''],
    }

    );
  } 
  searchByName(){
    console.log('here plat name',this.plat);
    this.platsService.searchedByName(this.plat).subscribe(
      (data)=>{
        console.log('Here received data from BE',data.searchedPlats);
        this.plats = data.searchedPlats;
        
      }
      

    )

  }
  

}
