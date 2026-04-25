import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Service {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiciosComponent {
  
}
