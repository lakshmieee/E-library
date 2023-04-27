import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './_service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private toaster:ToastrService, private authService: AuthService){}

  title = 'E_Library';
  ngOnInit(): void {
    localStorage.setItem('editBook','admin');
    localStorage.setItem('addBook','admin');
    localStorage.setItem('delete','admin');

  }
  public add=  localStorage.getItem('addBook');
 
  
 
  
  
 
  
}
