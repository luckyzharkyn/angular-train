import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Dynamic title";
  number = 42;

  obj = {
    a: 42,
    b: 64
  }

  inputValue = "";

  constructor() {
    
  }

  onInput(event: Event) {
    console.log(event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  changeInput(value: string) {
    this.inputValue = value;
  }
}
