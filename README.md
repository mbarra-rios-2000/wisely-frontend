
### README.md para el Frontend

```markdown
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

- Agrega nuevas tareas completando el formulario y haciendo clic en "Add".
- Edita una tarea existente haciendo clic en "Edit" junto a la tarea en la lista, luego modifica los campos en el formulario y haz clic en "Update".
- Elimina una tarea haciendo clic en "Delete" junto a la tarea en la lista.

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