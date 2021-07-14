import { Component, OnInit } from '@angular/core';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
plats:any;


  constructor(private platsService:PlatsService) { }

  ngOnInit() {
    this.platsService.getAllPlat().subscribe(
      (data)=>{
        console.log(data)
        this.plats = data.findedplats;
      }
    );
  }

}
