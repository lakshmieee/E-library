import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookListService } from '../book-list.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 public edit = localStorage.getItem('editBook');
 public del = localStorage.getItem('delete');
   
  constructor(public books:BookListService, private rou:Router){}
  
  filteredString: string = '';
  deletedBook: any;
  ngOnInit(): void {
   
  }


  editBook(id: any){
    this.rou.navigateByUrl('/edit-book/'+id);
    console.log(id);
  }

  //to delete one object in the array of object which is in the service.
  deleteItem(index: number) {
    this.deletedBook =this.books.deleteList(index);
    console.log(this.deletedBook);
  }

  }

  
 