import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    
   private fb = inject(FormBuilder);

   public color:string = 'green';

   public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(6),Validators.email]]
   });

   changeColor(){
     this.color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
   }
}
