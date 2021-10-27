import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-preview',
  templateUrl: './star-preview.component.html',
  styleUrls: ['./star-preview.component.css']
})
export class StarPreviewComponent implements OnInit {
  @Input() rating!: number | undefined;
  public stars: number[] = [];
  public left: number[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.stars = new Array<number>(this.rating as number);
    this.left = new Array<number>(5 - (this.rating as number));
  }

}
