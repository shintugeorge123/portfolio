import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hasIcon =false;
buttonList = [
   {buttonName:"ALL", buttonClass:"w3-black", iconName: "", hasIcon:false},
   {buttonName:"Design", buttonClass:"w3-white", iconName: "diamond",hasIcon:true},
   {buttonName:"Photos", buttonClass:"w3-white", iconName: "photo",hasIcon: true},
   {buttonName:"Art", buttonClass:"w3-white",  iconName: "map-pin",hasIcon: true}];
  constructor() { }

  ngOnInit() {
  }

}
