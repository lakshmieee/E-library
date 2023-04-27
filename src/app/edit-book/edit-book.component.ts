import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookListService } from '../_service/book-list.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

 public editBook =new FormGroup({
    bookId : new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)]),
    bookName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$"), Validators.maxLength(50)]),
    authorName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$"), Validators.maxLength(50)]),
    noOfBooks : new FormControl('', [ Validators.required,Validators.pattern(/^\d+$/)])

  })
  editedVal: any;
  

  constructor( private route:ActivatedRoute,private rou:Router, private book:BookListService){}

  ngOnInit(): void {
    //subcribe the val from the service
   this.route.params.subscribe((val)=>{
    let bookid = val['bookId']; 
    let filterBook=this.book.listOfbook.filter(note => note.bookId === bookid);
    console.log(filterBook);

// setting the value in edit form
    this.editBook.setValue({
      bookId: filterBook[0].bookId ? filterBook[0].bookId.toString() : null,
      bookName: filterBook[0].bookName ? filterBook[0].bookName.toString() : null  ,
      authorName: filterBook[0].author ? filterBook[0].author.toString() : null ,
      noOfBooks: filterBook[0].availablebooks ? filterBook[0].availablebooks.toString() : null
    });
   
   })
  }
//edited value can be print in console
  saveEditedValue(){
    this.editedVal={
      bookId:this.editBook.controls['bookId'].value,
      bookName:this.editBook.controls['bookName'].value,
      authorName:this.editBook.controls['authorName'].value,
      noOfBooks:this.editBook.controls['noOfBooks'].value,
       }
console.log(this.editedVal);
  }

  returnToSearch(){
this.rou.navigate(['/search']);
  }
}



