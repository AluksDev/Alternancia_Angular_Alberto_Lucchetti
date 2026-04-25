import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogCard } from '../blog_card/blog_card';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, ReactiveFormsModule, BlogCard],
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
  fb = inject(FormBuilder);

  posts = [
    {
      id: 1,
      title: 'Primer post',
      description: 'Este es un ejemplo de publicación'
    }
  ];

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]]
  });

  addPost() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newPost = {
      id: Date.now(),
      title: this.form.value.title!,
      description: this.form.value.description!
    };

    this.posts.unshift(newPost);
    this.form.reset();
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
