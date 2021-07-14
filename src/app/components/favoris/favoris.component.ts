import { Component, OnInit } from '@angular/core';
import { FavoriService } from 'src/app/services/favori.service';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  user: any;
  listFollow: any;
  plat:any;

  constructor( private favoriService:FavoriService ) { }

  ngOnInit() {
 this.GetList();
  }
  GetList(){
    this.user = JSON.parse(localStorage.getItem('User'));
    const dataToSendUnFollow = {
      follower:this.user['id'],
}
    this.favoriService.GetListFollow(dataToSendUnFollow).subscribe((res: any) => 
    {
 
      this.listFollow = res.data
      console.log('rrrr' ,this.listFollow)
    })
  }

}
