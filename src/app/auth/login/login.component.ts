import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * Current user
   * @type {any}
   */
  currentUser: any;

  /**
   * @ignore
   */
  constructor(
    public authService: AuthService,
    private router: Router) {}

   /**
    * Call function from AuthServer to login by Google
    */
  tryGoogleLogin(): void {
    this.authService.doGoogleLogin()
    .then((res: any) => {
      this.currentUser = res.user;
      this.authService.setUser(this.currentUser);
      this.router.navigate(['']);
    })
  }

}
