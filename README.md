# 01Entregable

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

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

## Descripción del Proyecto

Esta aplicación es una plataforma de gestión de estudiantes desarrollada con Angular y Angular Material. Permite agregar, editar y eliminar registros de estudiantes, mostrando la información en una tabla moderna y responsiva. La interfaz incluye una barra de navegación, un formulario para ingresar los datos de los estudiantes y una tabla para visualizar y administrar la lista. El proyecto aplica buenas prácticas de desarrollo en Angular, como el uso de formularios reactivos, arquitectura basada en componentes y estilos con Angular Material.

Esta entrega corresponde a la **primera entrega del curso de Angular**.

##Entregable N°2

## Funcionalidades Implementadas

### Navegación y Enrutamiento
- **Sistema de rutas**: Implementación de Angular Router para la navegación entre componentes
- **Enums para rutas**: Uso de enumeraciones para gestionar las rutas de manera centralizada y tipada
- **Navegación entre vistas**: Enlaces funcionales en la barra de navegación lateral

### Gestión de Estudiantes
- **Visualización de datos**: Tabla responsive con Angular Material que muestra la información completa de los estudiantes
- **Vista de detalles**: Componente dedicado para mostrar información detallada de cada estudiante con diseño profesional
- **Eliminación de registros**: Funcionalidad para eliminar estudiantes con feedback visual (spinner de carga)
- **Interfaz intuitiva**: Botones de acción con iconos de Material Design y tooltips explicativos

### Arquitectura y Buenas Prácticas
- **Componentes reutilizables**: Estructura modular con componentes especializados
- **Servicios para API**: Implementación de servicios para el manejo de datos con HttpClient
- **Tipado fuerte**: Uso de interfaces TypeScript para garantizar la consistencia de datos
- **Diseño responsive**: Adaptación a diferentes tamaños de pantalla
