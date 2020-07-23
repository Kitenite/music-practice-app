import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1; 

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Practice',
        link: '/practice',
        icon: 'music_note',
        disabled: false,
        index: 0
      }, {
        label: 'Calendar',
        link: '/calendar',
        icon: 'calendar_today',
        disabled: true,
        index: 1
      }, {
        label: 'Account',
        link: '/account',
        icon: 'account_circle',
        disabled: false,
        index: 2
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => this.router.url.includes(tab.link)));
      console.log
  });
  }

  navButtonClicked(link){
    this.router.navigate([link.link])
    this.activeLinkIndex = link.index
  }

}
