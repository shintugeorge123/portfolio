import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = [{title:"PORTFOLIO",menuIcon:"th-large", class:"w3-text-teal"},
               {title:"ABOUT",menuIcon:"user", class:""},
               {title:"CONTACT",menuIcon:"envelope", class:""}
  ];
  iconList = [{iconname:"facebook-official"},
                {iconname:"instagram"},
                {iconname:"snapchat"},
                {iconname:"pinterest"},
                {iconname:"twitter"},
                {iconname:"linkedin"}];
 
  constructor() { }

  ngOnInit() {
  }

}
