# Personal Website

<!-- See: [mldangelo.com](https://mldangelo.com). -->

My personal website. An [MIT](https://github.com/mldangelo/personal-site/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application that deploys automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/AdrDosal/personal-site.git
cd personal-site
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
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
