import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app works!';
  items = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push(`Item${i}`);
    }
  }

  ngOnInit(): void {
  }
}
