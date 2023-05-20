import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';  
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  itemList=JSON.parse(localStorage.getItem('productList') || '{}');
  radioOptions = new FormControl('1');

  ngOnInit(){
    console.log(this.itemList,"jfhskdjfhj");
    
  }
  deleteItem(item:any,index:number){
    console.log("check wrk");
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.itemList.splice(index,1);
        localStorage.setItem("trashList",JSON.stringify(item))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }
  onRadioButtonChange(event:any){

  }

}
