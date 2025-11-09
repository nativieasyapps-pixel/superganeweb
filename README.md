# SupergameWeb (no-ads)

Sitio limpio, rápido y SEO friendly. **Sin banners de anuncios**.

## Estructura
- `index.html` — Home con catálogo.
- `games/` — Páginas de juegos (placeholders).
- `css/styles.css` — Estilos.
- `js/main.js` — Búsqueda local y PWA.
- `manifest.webmanifest` + `service-worker.js` — Soporte offline básico.
- `robots.txt` + `sitemap.xml` — SEO técnico.
- `privacy.html` + `terms.html`

## Publicar en GitHub Pages
1. Crea un repo (o usa el existente) y sube estos archivos a la rama `main`.
2. Activa **Settings → Pages → Deploy from branch** → `main` (`/root`).
3. La URL será `https://<usuario>.github.io/<repo>/`.
4. Si tu repo actual es `superganeweb`, revisa que los enlaces usen rutas relativas (ya están).

## Añadir juegos propios
Pon tus HTML5 en `games/` y enlázalos desde tarjetas en `index.html`.
