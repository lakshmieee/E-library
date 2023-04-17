import { Injectable } from '@angular/core';
import { bookList } from './bookinter';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor() { }
  

 public listOfbook: bookList[]=[
  {
    bookId: '1',
    bookName: 'The India Story',
    author: 'Bimal Jalal',
    availablebooks: '100'
  },
  {
    bookId: '2',
    bookName: 'Listen to Your Heart: The London Adventure',
    author: 'Ruskin Bond',
    availablebooks: '60'
  },
  {
    bookId: '2*',
    bookName: 'Thirukkural',
    author: 'Thiruvalluvar',
    availablebooks: '75'
  },
  {
    bookId: '3',
    bookName: 'Ramavataram',
    author: 'Kamban',
    availablebooks: '150'
  },
  {
    bookId: '4',
    bookName: 'Kamba Ramayanam',
    author: 'Kambar',
    availablebooks: '20'
  },
  {
    bookId: '5',
    bookName: 'Paanchali Sabatham',
    author: 'Bharathidasan',
    availablebooks: '112'
  },
  {
    bookId: '6',
    bookName: 'Ponniyin Selvan',
    author: 'Kalki Krishnamurthy',
    availablebooks: '96'
  },
  {
    bookId: '7',
    bookName: 'Vishnupuram',
    author: 'Jeyamohan ',
    availablebooks: '45'
  },
  {
    bookId: '8',
    bookName: 'Panchali Sabatham',
    author: 'Subramania Bharati',
    availablebooks: '78'
  },
  {
    bookId: '9',
    bookName: 'Kolaiyuthir Kaalam',
    author: 'Sujatha Rangarajan ',
    availablebooks: '96'
  },
  {
    bookId: '10',
    bookName: 'The Bachelor of Arts',
    author: 'R. K. Narayan',
    availablebooks: '63'
  },
  {
    bookId: '11',
    bookName: 'Thanneer',
    author: 'Pudhumaipithan',
    availablebooks: '56'
  },
  {
    bookId: '12',
    bookName: 'Aathichudi',
    author: 'Auvaiyar',
    availablebooks: '12'
  },
  {
    bookId: '13',
    bookName: 'Sanga Thamizh',
    author: 'M. Karunanidhi',
    availablebooks: '54'
  },
  {
    bookId: '14',
    bookName: 'Kavithaigal',
    author: 'Vaali',
    availablebooks: '158'
  },
  {
    bookId: '15',
    bookName: 'Ayyanar Andhathi',
    author: 'C. S. Lakshmi ',
    availablebooks: '87'
  },
 ]

 deleteList(index: number){
  const deletedList = this.listOfbook.splice(index,1);
  return deletedList[0];  
 }

}
