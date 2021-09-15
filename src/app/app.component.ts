import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  ngOnInit() {
    let str = 'mayank kushwaha marry with neha';
    let number = 3;
    let newValue = str.split(' ');
    for (let i = 0; i < newValue.length; i++) {
      let modify = newValue[i].split('');
      let first: any = modify.splice(0, number);
      console.log(modify, 'test');
      let second: any = modify.splice(0, first.length);
      first = first.join('').toUpperCase() + second.join('');
      console.log(first);
    }
  }

  myData(data: string) {
    // alert(data)
  }
}
