import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  itemList=JSON.parse(localStorage.getItem('productList') || '[]');
  stock ="1"
  searchText =""
  filterProduct:any
  brandList=[ {name : "Redmi", checked : false},{name : "RealMe",checked : false},{name : "Samsung",checked : false},{name : "OnePlus", checked : false},{name : "Itel",checked : false},]
  locationList=[ {name : "Pune", checked : false},{name : "Chennai", checked : false}]

  brandValue=[]
  constructor(private router:Router){
    console.log(this.itemList,"jfhskdjfhj");
    this.onRadioButtonChange();
  }
  async updateResults() {
    this.filterProduct = this.searchByValue(this.itemList);
    
  }

  searchByValue(items:any) {
    return items.filter((item:any) => {
      if (this.searchText.trim() === '') {
        return true;
      } else {
        if(this.stock=='1'){
          return (
            item.name.toLowerCase().includes(this.searchText.trim().toLocaleLowerCase()) && item.stockAvail
          );
        }
        else{
          return (
            item.name.toLowerCase().includes(this.searchText.trim().toLocaleLowerCase()) && !item.stockAvail
          );
        }
       
      }
    });
  }
  onRadioButtonChange(){
    if(this.stock=="1")
    {
    this.filterProduct=this.itemList.filter((m:any)=>m.stockAvail==true)
    }
    else
    {
    this.filterProduct=this.itemList.filter((m:any)=>m.stockAvail==false)
    }
  }
  onChangeBrand(event:any){
    let data:string[]=[]
    this.brandList.forEach((item:any)=>{
      if(item.checked==true){
        this.itemList.forEach((element:any) => {
          if(this.stock=='1'){
            if(element.brand==item.name && element.stockAvail){
              data.push(element)
            }
          }
          else{
            if(element.brand==item.name && !element.stockAvail){
              data.push(element)
            }
          }
         
        });
      }    
    })
    if(data.length>0){
      this.filterProduct=data
    }
    else{
      this.filterProduct=this.itemList
    }
   
  }
  onChangeLocation(event:any){
    let data:string[]=[]
    this.locationList.forEach((item:any)=>{
      if(item.checked==true){
        this.itemList.forEach((element:any) => {
          if(this.stock=='1'){
            if(element.location==item.name && element.stockAvail){
              data.push(element)
            }
          }
          else{
            if(element.location==item.name && !element.stockAvail){
              data.push(element)
            }
          }
         
        });
      }    
    })
    if(data.length>0){
      this.filterProduct=data
    }
    else{
      this.filterProduct=this.itemList
    }
   
  }
  viewProduct(data:any){
    // let product ={img:data.img,title:data.title,description:data.description}
    localStorage.setItem("product-details",JSON.stringify(data))
    this.router.navigate(['view-product']);

  }
  addProduct(){
    
    this.router.navigate(['add-product']);

  }
  deleteItem(item:any,index:number){
    console.log("check wrk");
    let trashList=JSON.parse(localStorage.getItem('trashList') || '[]');
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
        this.filterProduct.splice(index,1);
        trashList.push(item)
        localStorage.setItem("trashList",JSON.stringify(trashList))
        localStorage.setItem("productList",JSON.stringify(this.itemList))

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

}
