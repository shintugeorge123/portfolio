import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterbutton',
  templateUrl: './filterbutton.component.html',
  styleUrls: ['./filterbutton.component.css']
})
export class FilterbuttonComponent implements OnInit {
  @Input() buttonClass = "";
  @Input() buttonName = "";
  @Input() hasIcon = false;
  @Input() iconname = "";
  constructor() { }

  ngOnInit() {
  }

}
