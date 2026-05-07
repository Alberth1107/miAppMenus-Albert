import { Component } from '@angular/core';

/**
 * `tabs.page.ts`
 *
 * Componente contenedor de las pestañas (tabs). Gestiona la navegación entre
 * `tab1`, `tab2` y `tab3`. Documenta aquí cualquier lógica de enrutamiento,
 * estados compartidos entre pestañas o servicios inyectados que coordinen la
 * aplicación.
 */
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  // El constructor puede inyectar servicios como NavController o un servicio
  // para compartir datos entre pestañas. Explica en palabras qué hace cada
  // servicio y por qué es necesario.
  constructor() {}

}
