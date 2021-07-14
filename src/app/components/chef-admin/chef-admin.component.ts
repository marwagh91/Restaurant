import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chef-admin',
  templateUrl: './chef-admin.component.html',
  styleUrls: ['./chef-admin.component.css']
})
export class ChefAdminComponent implements OnInit {
  role:any;
  user:any={};
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { }

 
    ngOnInit() {
    //   this.role = this.activatedRoute.snapshot.paramMap.get('role');
    // if(this.user.role =='chef'){
    //   this.userService.getUserByRole(this.role).subscribe(
    //   (data)=>{
    //     console.log('Here data', data.findedRoles);

    //     this.user=data.findedRoles;
    //   }
    // )
    // }
    }
   

}
