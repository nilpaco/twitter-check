import { Component } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public username: string;
  public isChecking: boolean;
  public isChecked: boolean;
  public isError: boolean;

  constructor(
    private twitterService: TwitterService
  ) { }

  checkUser() {
    this.setState();
    this.isChecking = true;
    this.twitterService.checkUser(this.username).take(1)
      .finally(() => this.isChecking = false)
      .subscribe(res => {
        this.isChecked = !res.valid;
        this.isError = res.valid;
      })
  }

  setState() {
    this.isChecked = false;
    this.isChecked = false;
    this.isError = false;
  }

}
