import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web';
  userInput = 'angular dev portal';
  showMessage = false;
  items = ['Item 1', 'Item 2', 'Item 3'];

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  addItem() {
    this.items.push('New Item');
  }
}
