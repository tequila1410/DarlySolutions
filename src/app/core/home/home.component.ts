import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  /**
   * Current user
   * @type {any}
   */
  currentUser: any;

  /**
   * Contains subscription which react on user data change
   * @type {Subscription}
   */
  currentUserSubscription: Subscription;

  /**
   * @ignore
   */
  constructor(authService: AuthService) { 
    this.currentUserSubscription = authService.currentUserSubject.subscribe((data: any) => {
      this.currentUser = data;
    }) 
  }
  
  /**
   * Call on component destroy
   */
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

}
