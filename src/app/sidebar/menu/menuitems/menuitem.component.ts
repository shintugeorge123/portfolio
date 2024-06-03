import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  @Input() title = ""
  @Input() menuIcon = ""
  constructor() { }

  ngOnInit() {
  }

}
