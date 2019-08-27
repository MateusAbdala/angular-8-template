import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.GetIssues().subscribe(res => {
      console.log('Issue added!')
      // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    });
  }

}
