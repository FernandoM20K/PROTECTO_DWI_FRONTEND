import { Component, OnInit } from '@angular/core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  snowIcon = faSnowflake;

  constructor() { }

  ngOnInit(): void {
  }

}
