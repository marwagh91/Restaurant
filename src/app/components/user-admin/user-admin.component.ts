import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
users:any;
@Input() userInput:any;
  constructor(private userService:UserService ) { }
getUser(){
  this.userService.getUserByRole().subscribe(
    (data)=>{
      this.users = data.findedRoles;
    }
  );
}
  ngOnInit() {
   this.getUser();
   
  }
  deleteUser(id){
  
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log('Here data',data.message);
        this.getUser();
      }
    
    )
    // this.router.navigate([ `delete-course/${id}`]);
    
      }

}


