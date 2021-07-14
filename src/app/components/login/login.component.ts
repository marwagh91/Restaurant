import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user:any={};
   Msg:String;
  formBuilder: any;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    }

    );
  }
  login(){
    
    console.log('Here User',this.user);
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log('Here data from BF',data.message);
        localStorage.setItem('User',JSON.stringify(data.user) );
        if(data.message=='2'){
          // traitement si user a connecte avec sucees
          // let id = data.user.id;
        if (data.user.role == 'admin') {
          this.router.navigate(['admin']);
    
        } else  if (data.user.role == 'chef') {
          this.router.navigate([`chef-admin`]);
        }
        else if (data.user.role == 'user') {
          this.router.navigate([``]);
  
        }      
      } 
         this.Msg ="email/password invalid";
   

      

            

          


        }

        
      
    )

  }
}
