<script lang="ts">
  let { children } = $props();
</script>

<header class="header">
  <a href="/" class="logo">🧭 Rumbos</a>
  <nav>
    <a href="/">Inicio</a>
    <a href="/destinos">Destinos</a>
    <a href="/viajes/nueva">Nueva Viaje</a>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer class="footer">
  <p>Rumbos © 2026 — Plataforma de Exploración y Planificación de Viajes</p>
</footer>

<style>
  :global(body) { margin: 0; font-family: system-ui, sans-serif; background: #f7f9fc; color: #222; }
  .header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: #1e3a8a; color: white; }
  .header .logo { color: white; font-weight: bold; font-size: 1.3rem; text-decoration: none; }
  .header nav a { color: white; margin-left: 1rem; text-decoration: none; }
  .header nav a:hover { text-decoration: underline; }
  main { padding: 2rem; max-width: 960px; margin: 0 auto; }
  .footer { text-align: center; padding: 1rem; background: #e5e7eb; margin-top: 3rem; font-size: 0.9rem; }
</style>