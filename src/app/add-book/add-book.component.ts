import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  addedVal:any;
  addBook =new FormGroup({
    bookId : new FormControl('',[Validators.required, Validators.pattern(/^\d+$/)]),
    bookName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$"), Validators.maxLength(50)]),
    authorName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$"), Validators.maxLength(50)]),
    noOfBooks : new FormControl('', [ Validators.required,Validators.pattern(/^\d+$/)])
  })
 
  saveAddedVal(){
    this.addedVal={
    bookId: this.addBook.controls['bookId'].value,
    bookName: this.addBook.controls['bookName'].value,
    authorName: this.addBook.controls['authorName'].value,
    noOfBooks: this.addBook.controls['noOfBooks'].value 
}
console.log(this.addedVal);
  }
}
