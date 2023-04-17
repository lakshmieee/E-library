import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'E_Library';
  ngOnInit(): void {
    localStorage.setItem('editBook','admin');
    localStorage.setItem('addBook','admin');
    localStorage.setItem('delete','admin');

  }
  public add=  localStorage.getItem('addBook');
 
}
