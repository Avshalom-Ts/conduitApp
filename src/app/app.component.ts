import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showPage = 'Home';

  navLink(str: string) {
    this.showPage = str;
    // console.log(str);
  }
}
