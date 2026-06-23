# Documentación del procedimiento: Formulario de Contacto

## 1. Archivos modificados

- `src/app/tab3/tab3.page.ts`
- `src/app/tab3/tab3.page.html`
- `src/app/tab3/tab3.page.scss`

## 2. Qué se cambió

### `tab3.page.ts`
- Se agregó un objeto `contact` para contener los datos del formulario:
  - `nombre`
  - `email`
  - `telefono`
  - `mensaje`
- Se agregó la bandera `submitted` para mostrar una confirmación después del envío.
- Se implementó el método `onSubmit(form: NgForm)`:
  - valida si el formulario es válido.
  - marca el formulario como enviado.
  - muestra `console.log` con los datos enviados.
  - reinicia el formulario con `form.resetForm()`.

### `tab3.page.html`
- Se agregó un `ion-card` con el formulario de contacto.
- Se incluyeron campos de `ion-input` y `ion-textarea` con validación:
  - `Nombre completo`: obligatorio, mínimo 3 caracteres.
  - `Correo electrónico`: obligatorio, debe ser un email válido.
  - `Teléfono`: opcional.
  - `Mensaje`: obligatorio, mínimo 10 caracteres.
- Se agregaron mensajes de error condicionales para cada campo.
- Se agregó un mensaje de éxito al enviar correctamente.

### `tab3.page.scss`
- Estilos para el formulario:
  - `.form-card`
  - `ion-item`
  - `ion-label`
  - `ion-input`
  - `ion-textarea`
  - `.submit-btn`
  - `.success-message`
- Se mantuvo el diseño general de la página de contacto y se integró el formulario con el estilo de la app.

## 3. Código clave usado

### `src/app/tab3/tab3.page.ts`
```ts
import { Component } from '@angular/core';
import type { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  contact = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  submitted = false;

  constructor() {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.submitted = true;
      console.log('Formulario de contacto enviado:', this.contact);
      form.resetForm();
    } else {
      form.control.markAllAsTouched();
    }
  }
}
```

### `src/app/tab3/tab3.page.html`
```html
<ion-card class="form-card">
  <ion-card-header>
    <ion-card-title>Formulario de Contacto</ion-card-title>
    <ion-card-subtitle>Envía tu mensaje directamente desde la app</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">

      <ion-item>
        <ion-label position="stacked">Nombre completo</ion-label>
        <ion-input
          type="text"
          required
          name="nombre"
          [(ngModel)]="contact.nombre"
          #nombre="ngModel"
          minlength="3"
          placeholder="Ej. Juan Pérez"
        ></ion-input>
      </ion-item>
      <ion-text color="danger" *ngIf="nombre.invalid && nombre.touched">
        <p *ngIf="nombre.errors?.['required']">El nombre es obligatorio.</p>
        <p *ngIf="nombre.errors?.['minlength']">Ingresa al menos 3 caracteres.</p>
      </ion-text>

      <ion-item>
        <ion-label position="stacked">Correo electrónico</ion-label>
        <ion-input
          type="email"
          required
          name="email"
          [(ngModel)]="contact.email"
          #email="ngModel"
          placeholder="ejemplo@correo.com"
        ></ion-input>
      </ion-item>
      <ion-text color="danger" *ngIf="email.invalid && email.touched">
        <p *ngIf="email.errors?.['required']">El correo es obligatorio.</p>
        <p *ngIf="email.errors?.['email']">Ingresa un correo válido.</p>
      </ion-text>

      <ion-item>
        <ion-label position="stacked">Teléfono</ion-label>
        <ion-input
          type="tel"
          name="telefono"
          [(ngModel)]="contact.telefono"
          placeholder="Opcional"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Mensaje</ion-label>
        <ion-textarea
          required
          name="mensaje"
          [(ngModel)]="contact.mensaje"
          #mensaje="ngModel"
          minlength="10"
          placeholder="Escribe tu mensaje aquí"
        ></ion-textarea>
      </ion-item>
      <ion-text color="danger" *ngIf="mensaje.invalid && mensaje.touched">
        <p *ngIf="mensaje.errors?.['required']">El mensaje es obligatorio.</p>
        <p *ngIf="mensaje.errors?.['minlength']">Ingresa al menos 10 caracteres.</p>
      </ion-text>

      <ion-button expand="block" type="submit" class="submit-btn">
        Enviar contacto
      </ion-button>

      <div *ngIf="submitted" class="success-message">
        <p>Formulario enviado correctamente. Gracias por tu mensaje.</p>
      </div>
    </form>
  </ion-card-content>
</ion-card>
```

### `src/app/tab3/tab3.page.scss`
```scss
.form-card {
  margin: 25px 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
}

ion-item {
  --background: rgba(255, 255, 255, 0.08);
  margin-bottom: 16px;
  border-radius: 14px;
}

ion-label {
  color: #e3f2fd;
  font-weight: 600;
}

ion-input,
ion-textarea {
  color: #ffffff;
}

.submit-btn {
  margin-top: 10px;
  --background: #4fc3f7;
  --color: #ffffff;
}

.success-message {
  margin-top: 18px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(76, 195, 247, 0.18);
  color: #e1f5fe;
  font-weight: 600;
}
```

## 4. Pruebas y validación

- Ejecuté `npm run build` para confirmar que la app compila.
- Verifiqué que el formulario funciona navegando a `http://localhost:4200/tabs/tab3`.
- La confirmación de envío se muestra en pantalla con el texto:
  - `Formulario enviado correctamente. Gracias por tu mensaje.`
- El envío también se registra en la consola del navegador:
  - `Formulario de contacto enviado: { nombre: ..., email: ..., telefono: ..., mensaje: ... }`

## 5. Capturas de pantalla

Tomé una captura de la página activa de contacto en el navegador en `http://localhost:4200/tabs/tab3`.

> Si deseas, puedo guardar la captura dentro del proyecto como `assets/img/contacto-form.png` y actualizar este documento con la imagen incluida.
