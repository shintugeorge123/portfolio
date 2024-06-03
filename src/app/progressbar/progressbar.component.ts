import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  hasIcon =false;
  skillList = [
    {skillTitle:"Photography", percentage:"95%"},{skillTitle:"Web Design", percentage:"85%"},{skillTitle:"Photoshop", percentage:"80%"}];
    buttonList = [
      {buttonName:"Download Resume", buttonClass:"w3-margin-top w3-margin-bottom w3-dark-grey", iconName: "download", hasIcon:true},
];
  constructor() { }

  ngOnInit() {
  }

}
