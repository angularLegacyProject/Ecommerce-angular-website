import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quntity',
  templateUrl: './quntity.component.html',
  styleUrls: ['./quntity.component.css'],
})
export class QuntityComponent implements OnInit {
  constructor() {}
  @Input() prod: any;
  ngOnInit(): void {
    console.log(this.prod, 'quna');
  }
}
