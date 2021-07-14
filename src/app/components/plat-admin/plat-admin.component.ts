import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-plat-admin',
  templateUrl: './plat-admin.component.html',
  styleUrls: ['./plat-admin.component.css']
})
export class PlatAdminComponent implements OnInit {
  plat:any;
  plats:any;
  constructor(private platsService:PlatsService,private router:Router) { }

  getPlats(){
    this.platsService.getAllPlat().subscribe(
      (data)=>{
        this.plats = data.findedplats;
      }
    );
  }

    ngOnInit() {
     this.getPlats();
    }
    // displayPlat(id){
    //   this.router.navigate([ `plats-details/${id}`]);
  
    // }
    editPlat(id){
      this.router.navigate([ `edit-plat/${id}`]);
  
    }
    // getPlatByChef(idChef){getPlatByChef
    //   this.platsService.(idChef).subscribe(
    //     (data)=>{
    //       console.log('Here data', data.findedplatsByChef);
    //       this.plat=data.findedplatsByChef;
    //     }
    //   )}
    deletePlat(id){
  let conf = confirm("Etes-vous sur");
  if (conf) {
    this.platsService.deletePlat(id).subscribe(
      (data)=>{
        console.log('Here data',data.message);
        this.getPlats();
      }
    
    )
  }
 
  // this.router.navigate([ `delete-course/${id}`]);
  
    }

}
