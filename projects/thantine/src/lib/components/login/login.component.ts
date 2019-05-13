import { Component, Output, EventEmitter } from '@angular/core';
import { LoginInfo } from '../../models/thantine.model';

@Component({
  selector: 'thantine-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() login: EventEmitter<LoginInfo> = new EventEmitter<LoginInfo>();

  public email: string;
  public password: string;
  public remembered: boolean;

  public submit(evt) {
    evt.preventDefault();
    this.login.emit({
      email: this.email,
      password: this.password,
      remembered: this.remembered
    });
  }
}
