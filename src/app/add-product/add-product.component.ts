import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm:FormGroup;
  submitted = false;
  itemList=JSON.parse(localStorage.getItem('productList') || '[]');
  imageUrl: any = "";
  brandList=[ "Redmi","RealMe","Samsung","OnePlus","Itel","Iphone"]
  locationList=[ "Pune","Chennai"]

  @ViewChild('fileInput') el:any= ElementRef;

  constructor(private formBuilder:FormBuilder,private router: Router){
    this.productForm=this.formBuilder.group({
      title: ['', Validators.required],
      desc:["", Validators.required],
      img: [null, Validators.required],
      brand:["", Validators.required],
      location:["", Validators.required],
    })
    console.log(this.itemList,"itemm");
    
   }
  ngOnInit(){

  }
  
  uploadFile(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.productForm.patchValue({
          img: reader.result
        });
      }    
    }
  }

   // convenience getter for easy access to form fields
   get f() { return this.productForm.controls; }

   onSubmit(){
    this.submitted = true;

    if (this.productForm.invalid) {
        return;
    }
    console.log(this.productForm.value,"this.productForm.value");
    
    this.itemList.push(this.productForm.value)
    
    localStorage.setItem("productList",JSON.stringify(this.itemList))

          Swal.fire(
            'Successfully Added !',
            '',
            'success'
          )
          this.router.navigate(['list-product']);
  
    
   
   }
   onReset(){
    this.submitted = false;
    this.productForm.reset();
   }

}
