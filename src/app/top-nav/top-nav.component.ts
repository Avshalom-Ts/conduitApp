import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Output() buttonItemPressed = new EventEmitter<string>();
  headerButtons = ['Home', 'Sign in', 'Sign up'];

  navLinkPressed(str: string) {
    console.log(str);
    this.buttonItemPressed.emit(str);
  }
}
