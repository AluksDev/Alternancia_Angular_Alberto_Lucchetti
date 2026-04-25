# AlternanciaAngularAlbertoLucchetti

Aplicación Angular con sistema de routing implementado. Esta es la base para los ejercicios de la alternancia.

## Ejercicio 1.1: Sistema de Routing

### Descripción
Se ha implementado un sistema de navegación con tres secciones principales:
- **Inicio**: Pantalla de bienvenida con descripción del proyecto
- **Servicios**: Galería de servicios y blog
- **Contacto**: Formulario de contacto reactivo

### Características Implementadas
✓ Navegación con RouterModule  
✓ Actualización dinámica del contenido sin recargar la página  
✓ Indicador visual de la sección activa en la barra de navegación  
✓ Componentes standalone  
✓ Formulario reactivo con validación  

### Estructura del Proyecto
```
src/app/
├── components/
│   ├── inicio/
│   │   └── inicio.ts
│   ├── servicios/
│   │   └── servicios.ts
│   └── contacto/
│       └── contacto.ts
├── app.ts              # Componente raíz
├── app.routes.ts       # Configuración de rutas
├── app.html            # Template con navegación
└── app.css             # Estilos globales
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
