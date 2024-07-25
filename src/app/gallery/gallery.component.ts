import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": '../Assets/Images/horse.jpg'
  },
  {
    "ID": "2",
    "url": '../Assets/Images/horses-running-through-old-western-town.jpg'
  },
  {
    "ID": "3",
    "url": '../Assets/Images/realistic-horse-beach.jpg'
  },
  {
    "ID": "4",
    "url": '../Assets/Images/running-stallion-meadow-capturing-beauty-nature-generated-by-artificial-intelligence.jpg'
  }];
  }
  
