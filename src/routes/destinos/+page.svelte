<script lang="ts">
  let { data } = $props();
</script>

<h1>Destinos disponibles</h1>
<p>Total: {data.destinos.length}</p>

<div class="grid">
  {#each data.destinos as d (d.id)}
    <article class="card">
      <h2>{d.nome}</h2>
      <p><strong>{d.pais}</strong> — {d.continente}</p>
      <p>{d.descricao}</p>
    </article>
  {/each}
</div>

<style>
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
  .card { background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
  .card h2 { margin-top: 0; }
</style>