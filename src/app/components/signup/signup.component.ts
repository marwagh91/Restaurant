import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  url: any;
  imagePreview: string;
  constructor(private formBuilder:FormBuilder, private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.url = this.router.url;
    
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: [''],
      tel:['', [Validators.minLength(8), Validators.required]],
      avatar:['']
    },
    {
      validator: MustMatch('password','confirmPassword')
      }
    );
  }
  signup(user) {
    console.log('Here my user', user);
    if (this.url == '/signup') {
      console.log('im user')
      user.role = 'user';

    } 
    else if (this.url == '/signupAdmin')   {
      console.log('im user')
      user.role = 'admin';
    }
    else if (this.url == '/signupChef') {
      console.log('im user')
     user.role='chef';
    }
    console.log(user)


    this.userService.addUser(user, this.signupForm.value.avatar).subscribe(
      (data) => {
        console.log('Data from BE ',data.message);
        this.router.navigate([ `login`]);


      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ avatar: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
