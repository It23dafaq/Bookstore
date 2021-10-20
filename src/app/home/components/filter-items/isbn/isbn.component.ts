import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isbn',
  templateUrl: './isbn.component.html',
  styleUrls: ['./isbn.component.css']
})
export class IsbnComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
