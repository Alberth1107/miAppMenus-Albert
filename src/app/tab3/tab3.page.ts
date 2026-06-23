import { Component } from '@angular/core';
import type { NgForm } from '@angular/forms';

/**
 * `tab3.page.ts`
 *
 * Página ``Contacto`` — muestra métodos de contacto y un formulario.
 * El formulario usa Angular template-driven forms para validar entrada:
 * - nombre: obligatorio, mínimo 3 caracteres.
 * - correo: obligatorio, debe ser email válido.
 * - mensaje: obligatorio, mínimo 10 caracteres.
 *
 * Se documenta aquí el propósito de cada campo y la acción de envío.
 */
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  //  guardo los datos que el usuario va escribiendo en el formulario
  contact = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  // kios 2: bandera para mostrar el mensaje de éxito cuando se envía bien
  submitted = false;

  constructor() {}

  /**
   * kios 3: este método se activa al pulsar el botón Enviar.
   * Si el formulario está válido, muestro el mensaje y reinicio el formulario.
   * Si no, marco todos los campos como tocados para mostrar los errores.
   * @param form Formulario Angular template-driven con estado y validación.
   */
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
