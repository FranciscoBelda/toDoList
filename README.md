

# To-Do List App

Una aplicación sencilla, intuitiva y funcional para la gestión de tareas diarias. Este proyecto ha sido desarrollado para practicar la lógica de manipulación de arrays, estados de componentes y persistencia de datos en el cliente.

## ✨ Características

* **Añadir Tareas**: Crea nuevas tareas rápidamente mediante un campo de entrada.
* **Marcar como Completado**: Cambia el estado de las tareas para llevar un control visual del progreso.
* **Eliminar Tareas**: Borra tareas de forma individual cuando ya no sean necesarias.
* **Persistencia Local**: Utiliza `LocalStorage` para que tus tareas no se borren al recargar la página.
* **Contador de Pendientes**: Visualiza cuántas tareas te quedan por finalizar en tiempo real.

## 🛠️ Tecnologías

* **Framework**: [Angular](https://angular.io/) (v17+)
* **Estilos**: CSS3 / SCSS con metodologías como BEM o Bootstrap para un diseño limpio.
* **Almacenamiento**: Web Storage API (LocalStorage).
* **Iconografía**: Font Awesome o Heroicons.

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**:
```bash
git clone https://github.com/FranciscoBelda/toDoList.git
cd toDoList

```


2. **Instalar dependencias**:
```bash
npm install

```


3. **Lanzar el proyecto**:
```bash
ng serve

```


Abre tu navegador en `http://localhost:4200/`.

## 📁 Estructura de la Aplicación

El proyecto se divide en componentes modulares para mantener un código limpio:

* **`TaskComponent`**: Representa la unidad individual de cada tarea.
* **`TaskListComponent`**: Contenedor principal que gestiona el array de tareas y la lógica de filtrado.
* **`TaskService`**: (Si aplica) Encargado de centralizar la lógica de guardado y recuperación de datos de la lista.

## 📝 Ejemplo de Uso

1. Escribe el nombre de la tarea en el input superior.
2. Presiona "Enter" o el botón "Añadir".
3. Haz clic en el círculo/checkbox para marcarla como hecha.
4. Usa el icono de la papelera para eliminarla definitivamente.

---

**Autor:** [Francisco Belda](https://github.com/FranciscoBelda)

**Licencia:** MIT
