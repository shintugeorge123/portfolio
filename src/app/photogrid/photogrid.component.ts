import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogrid',
  templateUrl: './photogrid.component.html',
  styleUrls: ['./photogrid.component.css']
})
export class PhotogridComponent implements OnInit {

  gridDetails = [
    {gridImage:"/assets/images/tree-image.jpg", imageTitle:"Lorem Ipsum", imageDetails: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."},
    {gridImage:"/assets/images/tree-image.jpg", imageTitle:"Lorem Ipsum", imageDetails: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."},
    {gridImage:"/assets/images/tree-image.jpg", imageTitle:"Lorem Ipsum", imageDetails: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
    ];

  constructor() { }

  ngOnInit() {
  }

}
