import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoriService } from 'src/app/services/favori.service';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  @Input() platInput: any;
  user: any;
  isFollow: boolean;
  plat:any;
  idChef:any;
  constructor(private favoriService: FavoriService, private platsService:PlatsService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    console.log(this.platInput)
  }

  SaveFollow(plat) {
    this.user = JSON.parse(localStorage.getItem('User'));
    const dataToSendUnFollow = {
      follower: this.user['id'],
      following: plat['_id'],
    }
    console.log(dataToSendUnFollow)
    this.favoriService.Follow(dataToSendUnFollow).subscribe((res: any) => {
      if (res.status = 200) {
      this.isFollow = true;
      } 
    })
  }

  RemoveFollow(plat) {
    this.user = JSON.parse(localStorage.getItem('User'));
    const dataToSendUnFollow = {
      follower: this.user['id'],
      following: plat['_id'],
    }
    this.favoriService.UnFollow(dataToSendUnFollow).subscribe((res: any) => {
      if (res.status = 200) {
        this.isFollow = false;
      }
    })
  }

  GetList(plat) {
    this.user = JSON.parse(localStorage.getItem('User'));
    const dataToSendUnFollow = {
      follower: this.user['id'],
      following: plat['_id']
    }
    this.favoriService.GetListFollow(dataToSendUnFollow).subscribe((res: any) => {
      console.log('rrrr', res)
    })
  }
  // getPlatByChef(){
  //   this.idChef = this.activatedRoute.snapshot.paramMap.get('id');
  //   this.platsService.getPlatByChef(this.idChef).subscribe(
  //     (data)=>{
  //       console.log('Here data', data.findedplatsByChef);
  //       this.plat=data.findedplatsByChef;

  //     }
  //   )}
  }


