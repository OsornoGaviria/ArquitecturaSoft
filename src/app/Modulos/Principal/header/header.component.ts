import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Icon='https://firebasestorage.googleapis.com/v0/b/driver-app-2021.appspot.com/o/LOGO%20CAR%20YA-01.svg?alt=media&token=239bad98-850a-48ac-a039-c85a53bd4691';
 
  constructor() { }

  ngOnInit(): void {
  }

}
