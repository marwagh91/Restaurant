import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-add-plats',
  templateUrl: './add-plats.component.html',
  styleUrls: ['./add-plats.component.css']
})
export class AddPlatsComponent implements OnInit {
  title:any;
  id:any;
  plat:any={};
  addPlatForm: any;
  imagePreview: string;

  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private paltsService:PlatsService ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.title='Edit';
      this.paltsService.getPlatById(this.id).subscribe(
      (data)=>{
        console.log(data)
        this.plat=data.findedplats;
      }
    )
    }else{
      this.title = 'Add'
    }
      this.addPlatForm = this.formBuilder.group({
          name:[''],
          description:[''],
          price:[''],
          img:['']
    
    
      });
    
    }
    // fonction faire add et edit
    submitPlat(){
      if(this.id){
        //edit plat
        this.paltsService.editPlat(this.plat).subscribe(
          (data)=>{
            console.log('Here data from BE', data.message);
            
          }
        )
        // add plat
      }else{
     this.plat['idChef']=JSON.parse(localStorage.getItem('User'))['id']
       console.log(this.plat)
        this.paltsService.addPlat(this.plat, this.addPlatForm.value.img ).subscribe(
          (data) =>{
            console.log('data from BE',data);
          }
        )
    
      }
   
    }
    onImageSelected(event: Event) {
      //file selectionner le file num 0 et l'enregistrer dans file
      const file = (event.target as HTMLInputElement).files[0];
      // ajouter un file dans attribut img dans addCourseForm(formulaire)
      this.addPlatForm.patchValue({ img: file });
      // update du addCourseForm
      this.addPlatForm.updateValueAndValidity();
      // lecteur d'image
      const reader = new FileReader();
      reader.onload = () => {
        // le resultat de reader sobha fi imagePreview
      this.imagePreview = reader.result as string
      };
      reader.readAsDataURL(file);
      }

}
