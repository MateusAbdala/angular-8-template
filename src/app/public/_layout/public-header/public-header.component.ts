import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  constructor(
    // public authService: AuthService
  ) { }

  ngOnInit() {
    // this.authService.GetIssues().subscribe(res => {
    //   console.log('Issue added!');
    //   // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    // });
  }

}
