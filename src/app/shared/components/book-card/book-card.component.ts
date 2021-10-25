import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book.model';
import {StorageService} from '../../../services/storageService/storage.service';
import {Keys} from '../../../models/enums/keys.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() data?: Book | null | undefined ;
  @Input() isEnable = true;
  @Input() isCategory = false;
  img = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  rating = '';
  tittle = 'test';

  constructor(private storage: StorageService, private router: Router) {
    if (this.data?.img){
       this.img = this.data.img;
    }
  }

  ngOnInit(): void {

  }

  setSelectedItem(): void {
    this.storage.setSelectedBook(Keys.selected_book, this.data as Book);
    if (this.isEnable) {
      this.storage.setSelectedBook(Keys.selected_book, this.data as Book);
    }
    else if ( this.isCategory ){
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }else{
      this.storage.setSelectedBook(Keys.selected_book, this.data as Book);
      this.router.navigateByUrl(`home/category/${this.data?.isbn}`);
    }
  }
}
