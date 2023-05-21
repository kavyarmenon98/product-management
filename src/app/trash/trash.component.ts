import { Component } from '@angular/core';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  deletedProduct=JSON.parse(localStorage.getItem('trashList') || '[]');
  itemList=JSON.parse(localStorage.getItem('productList') || '[]');

  ngOnInit(){

    console.log(this.deletedProduct,"check");
  }

  restoreItem(item:any,index:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restore it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletedProduct.splice(index,1);
        this.itemList.push(item)
        localStorage.setItem("trashList",JSON.stringify(this.deletedProduct))
        localStorage.setItem("productList",JSON.stringify(this.itemList))
        Swal.fire(
          'Restored!',
          'Your file has been restored.',
          'success'
        )
      }
    })
  }
  deleteItem(item:any,index:number){
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
        this.deletedProduct.splice(index,1);
        localStorage.setItem("trashList",JSON.stringify(this.deletedProduct))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }
}
