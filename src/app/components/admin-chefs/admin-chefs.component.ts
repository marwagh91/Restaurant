import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-chefs',
  templateUrl: './admin-chefs.component.html',
  styleUrls: ['./admin-chefs.component.css']
})
export class AdminChefsComponent implements OnInit {
@Input () chefInput:any;
chefs:any;
  constructor(private userService:UserService) { }
  getChefs(){
    this.userService.getChefByRole().subscribe(
      (data)=>{
        this.chefs = data.findedChefs;
      }
    );
  }
 
 
  ngOnInit() {

    this.getChefs();
  }
  deleteChef(id){
      this.userService.deleteChef(id).subscribe(
        (data)=>{
          console.log('Here data',data.message);
          this.getChefs();
        }
      
      )
      // this.router.navigate([ `delete-course/${id}`]);
      
        
  }


}
