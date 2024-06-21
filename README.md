# Frontend de Gestión de Tareas

Este proyecto es el frontend de una aplicación de gestión de tareas desarrollado con Vue.js.

## Requisitos

- Node.js

## Configuración

1. **Clona el repositorio y navega al directorio del frontend:**

    ```bash
    git clone <URL_DEL_REPOSITORIO_FRONTEND>
    cd frontend
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Inicia el servidor de desarrollo:**

    ```bash
    npm run serve
    ```

4. **Abre tu navegador y ve a `http://localhost:8080`.**

## Uso

- **Agregar nuevas tareas:** Completa el formulario y haz clic en "Add".
- **Editar una tarea:** Haz clic en "Edit" junto a la tarea en la lista, modifica los campos en el formulario y haz clic en "Update".
- **Eliminar una tarea:** Haz clic en "Delete" junto a la tarea en la lista.

## Estructura del Proyecto

```plaintext
frontend/
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── TaskForm.vue
│   │   └── TaskList.vue
│   ├── views/
│   │   └── TaskManagementHome.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
└── package.json