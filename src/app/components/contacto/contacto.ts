import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent {
  fb = inject(FormBuilder);
  letters = signal<number>(0);
  form = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor() {
    this.form.controls.mensaje.valueChanges.subscribe(value => {
      if (!value) {
        this.letters.set(0);
        return;
      }
      this.letters.set(value.length);
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    alert('Formulario enviado')
    this.form.reset();
  }

  onBlur(field: string) {
    this.form.get(field)?.markAsTouched();
  }
}
