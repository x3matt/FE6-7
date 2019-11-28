import {Component, Input, OnInit} from '@angular/core';
import {NavigationItemDto} from '../../dto/NavigationItemDto';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationData: NavigationItemDto[] = [
    {name: 'Home', link: 'https://www.google.com'},
    {name: 'About', link: 'about'},
    {name: 'Sample Post', link: 'https://www.google.com'},
    {name: 'Contact', link: 'https://www.google.com'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
