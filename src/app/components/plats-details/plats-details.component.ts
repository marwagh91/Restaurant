import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-plats-details',
  templateUrl: './plats-details.component.html',
  styleUrls: ['./plats-details.component.css']
})
export class PlatsDetailsComponent implements OnInit {

  plat:any;
  idChef:any;
  id:any;
    constructor(private activatedRoute: ActivatedRoute, private platService:PlatsService) { }
   
    ngOnInit() {
      this.getPlatByCh(this.id);

    }

    async getPlatByCh(id){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
    await this.platService.getPlatByIdChef(this.id).subscribe(
      (data)=>{
        console.log('Here data', data);
        this.plat=data.findedplatsByChef;
      }
    );
    }
  }
  //   getPlatByCh(id){
  //     this.id = this.activatedRoute.snapshot.paramMap.get('id');
  // this.platsService.getPlatByChef(this.idChef).subscribe(
  //     (data)=>{
  //       console.log('Here data', data.findedplatsByChef);
  //       this.plat=data.findedplatsByChef;

  //     }
  //   )}

}
