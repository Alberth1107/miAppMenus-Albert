# miAppMenus

Proyecto de ejemplo creado para mis hijos, que refleja su pasión por el fútbol.

## Descripción

`miAppMenus` es una aplicación móvil creada con Ionic/Angular pensada para mostrar contenido y menús relacionados con el fútbol juvenil. Fue desarrollada como parte de la Evaluación 1 de la asignatura Programación 3.

El objetivo principal es motivar a los niños a aprender programación mediante una app que muestre su interés por el deporte: noticias, tarjetas de jugadores, y navegación por pestañas.

## Propósito

- Proyecto dedicado a mis hijos: fomentar su pasión por el fútbol y mostrarles cómo el software puede presentar su afición.
- Entregar los requerimientos de la Evaluación 1 de Programación 3.

## Características

- Navegación por pestañas (`Tabs`) con tres secciones principales.
- Páginas para contenido estático y tarjetas de jugadores.
- Recursos gráficos en `src/assets/img` para ilustrar jugadores y portadas.

## Tecnologías

- Ionic
- Angular
- TypeScript

## Estructura principal

- `src/app/` — Código fuente de la app.
- `src/assets/img/` — Imágenes usadas en la app (jugadores, portada, fondos).
- `src/app/tab1`, `tab2`, `tab3` — Páginas por pestaña.

## Cómo ejecutar (desarrollo)

1. Instalar dependencias:

```bash
npm install
```

2. Levantar la app en modo desarrollo:

```bash
ionic serve
```

3. Para probar en dispositivo o emulador, configurar Capacitor según tu entorno.

## Requisitos de la Evaluación (rúbrica del profesor)

Según las especificaciones proporcionadas por el profesor, la Evaluación 1 solicita lo siguiente:

1. Crear una aplicación con IONIC que contenga 3 menús:
   - Inicio
   - Información personal
   - Contacto

2. Todo el código fuente debe estar documentado con las palabras del estudiante, especialmente en las partes que se programan (no en lo que genera automáticamente el framework). Es imprescindible evidenciar la interpretación propia del estudiante.

3. Los documentos de la entrega (trabajo escrito) deben presentarse en PDF por la plataforma de la Universidad bajo el tipo "Trabajo Académico" y siguiendo la normativa APA.

4. El código de las prácticas debe subirse a GitHub y compartir el enlace en el documento de entrega.

Estado actual en este repo:

- [x] Código subido a GitHub: https://github.com/Alberth1107/miAppMenus-Albert
- [x] Estructura de la app con pestañas: las carpetas `src/app/tabs`, `src/app/tab1`, `tab2`, `tab3` están presentes.
- [ ] Documentación en código: se recomienda añadir comentarios en español en los archivos de `src/app/*` explicando la lógica implementada.
- [x] Archivo con instrucciones para entregar (se incluye `ENTREGA.md` listo para convertir a PDF).

Instrucciones rápidas para la entrega PDF:

- Abre `ENTREGA.md` y complétalo con los datos personales y capturas solicitadas.
- Convierte a PDF desde tu editor (por ejemplo, Visual Studio Code con la extensión "Markdown PDF") o exportando desde Word/LibreOffice.
- Sube el PDF a la plataforma de la Universidad y pega el enlace del repositorio GitHub en el documento donde se solicite.

Si quieres, puedo:

- Añadir comentarios en los archivos principales para cumplir la cláusula de documentación (puedo insertar comentarios explicativos en `tab1.page.ts`, `tab2.page.ts`, `tab3.page.ts`, y `tabs.page.ts`).
- Generar `ENTREGA.md` listo para convertir a PDF y commitearlo.
- Añadir un `.gitignore` apropiado.
