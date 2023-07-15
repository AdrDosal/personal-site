# Personal Website

<!-- See: [mldangelo.com](https://mldangelo.com). -->

Página web personal. Utiliza la licencia [MIT](https://github.com/AdrDosal/personal-site/blob/main/LICENSE), simple, facilmente modificable, exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) aplicación que despliega gratis en [github pages](https://pages.github.com/). Construida con JavaScript moderno, basado en [create-react-app](https://github.com/facebook/create-react-app) con [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), y otras muchas tecnologías.

## Dependencias

Probar con: [node](https://nodejs.org/) >= v14 y opcional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para mantimiento de versiones.

## Preparación

Descargar el repositorio e instalar las dependencias, ejecutar los siguientes comandos:

```bash
git clone https://github.com/AdrDosal/personal-site.git
cd personal-site
nvm install # asegurarse de que tenemos node 14 o superior
npm install
```

## Ejecutar

Ejecutar el siguiente comando para lanzar la aplicación y el servidor con refresco:

```bash
npm start
```
El navegador se abrirá de forma automática en el `<ip>:<port>:<path>` por defecto: [http://localhost:3000/](http://localhost:3000/).

## Despliegue

### Despliegue en Github pages

1. Modificar las variables de entorno y realizar git remote url en  [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modificar `homepage` en `package.json` para que apunte hasta donde queremos alojar nuestra web. Si no queremos utilizar un dominio personalizado, se mostrará cómo `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. En caso de utilizar un dominio personalizado, modificar `public/CNAME`. Si no, borrar el `public/CNAME`.

Realizar commit a `main` y push los cambios.

### Exportar estático

Para exportar de forma estática el sitio sin desplegarlo en github pages, borrar o deshabilitar `.github/workflows/github-pages.yml` y ejecutar `npm run predeploy`. Esto generará una exportación estática de la página web como `personal-site/build/`. Copiar esto y desplegarla en un CDN.
