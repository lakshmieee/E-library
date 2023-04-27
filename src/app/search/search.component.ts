import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookListService } from '../_service/book-list.service';
import {  Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmBoxComponent } from '../delete-confirm-box/delete-confirm-box.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 public edit = localStorage.getItem('editBook');
 public del = localStorage.getItem('delete');
  
   
  constructor(public books:BookListService, private rou:Router, private deldialog:MatDialog){}

  items=this.books.listOfbook;
  
  filteredString: string = '';
  deletedBook: any;
  ngOnInit(): void {
 
  }


  editBook(id: any){
    this.rou.navigateByUrl('/edit-book/'+id);
    console.log(id);
  }

  

  openDialog(index: number) {
   const dialogRef =  this.deldialog.open(DeleteConfirmBoxComponent);

     dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.items.splice(index, 1);
      }
    });
  }
  }


  

  
 