import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() data = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.data.emit('Hi i am child component');
  }

}