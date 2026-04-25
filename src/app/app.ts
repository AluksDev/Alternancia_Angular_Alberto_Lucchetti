import { Component, signal, computed } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Alternancia_Angular_Alberto_Lucchetti');
  currentRoute = signal('inicio');

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.url.split('/')[1] || 'inicio';
        this.currentRoute.set(url);
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute() === route;
  }
  ngOnInit() {
  document.documentElement.setAttribute('data-theme', 'light');
}
toggleTheme() {
  const root = document.documentElement;
  console.log(root)
  const current = root.getAttribute('data-theme');

  if (current === 'dark') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
  }
}
}
