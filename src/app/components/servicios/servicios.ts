import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiciosComponent {
   images = [
    {
      src: 'images/image1.png',
      alt: 'Servicio 1'
    },
    {
      src: 'images/image2.png',
      alt: 'Servicio 2'
    },
    {
      src: 'images/image3.jpg',
      alt: 'Servicio 3'
    },
  ];

  selectedImage = this.images[0];

  selectImage(image: any) {
    this.selectedImage = image;
  }
}
