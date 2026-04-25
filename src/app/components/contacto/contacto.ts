import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent {
}
