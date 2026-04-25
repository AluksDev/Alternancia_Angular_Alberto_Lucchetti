import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
export interface Post {
  id: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog_card.html',
  styleUrl: './blog_card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCard { 
  post = input<Post>();
  delete = output<number>()

  removePost() {
    this.delete.emit(this.post()!.id);
  }
}
