import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sticky = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScroll(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.sticky = true;
    }else{
      this.sticky = false;
    }
  }

}
