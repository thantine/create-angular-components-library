import { Component } from '@angular/core';

@Component({
  selector: 'thantine-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string;
  public password: string;
  public remembered: boolean;

  public submit(evt) {
    evt.preventDefault();

    window.alert(`
      email: ${this.email},
      password: ${this.password},
      remember: ${this.remembered}
    `);
  }
}
