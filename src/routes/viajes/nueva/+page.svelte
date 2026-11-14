<script lang="ts">
  let { data, form } = $props();
</script>

<h1>Nueva Viaje</h1>

{#if form?.exito}
  <p class="ok">✅ ¡Viaje "{form.titulo}" creada con éxito!</p>
{/if}

<form method="POST">
  <label>
    Título
    <input name="titulo" value={form?.titulo ?? ''} />
    {#if form?.errores?.titulo}<span class="err">{form.errores.titulo}</span>{/if}
  </label>

  <label>
    Destino
    <select name="destinoId">
      <option value="">-- elige uno --</option>
      {#each data.destinos as d (d.id)}
        <option value={d.id} selected={form?.destinoId === d.id}>{d.nombre} ({d.pais})</option>
      {/each}
    </select>
    {#if form?.errores?.destinoId}<span class="err">{form.errores.destinoId}</span>{/if}
  </label>

  <label>
    Fecha de inicio
    <input type="date" name="fechaInicio" value={form?.fechaInicio ?? ''} />
    {#if form?.errores?.fechaInicio}<span class="err">{form.errores.fechaInicio}</span>{/if}
  </label>

  <label>
    Fecha de fin
    <input type="date" name="fechaFin" value={form?.fechaFin ?? ''} />
    {#if form?.errores?.fechaFin}<span class="err">{form.errores.fechaFin}</span>{/if}
  </label>

  <label>
    Presupuesto previsto (R$)
    <input type="number" name="presupuesto" min="0" step="0.01" value={form?.presupuesto ?? 0} />
  </label>

  <button type="submit">Crear viaje</button>
</form>

<h2>Viajes creadas en esta sesión</h2>

{#if data.viajes.length === 0}
  <p>Aún no hay viajes.</p>
{:else}
  <ul>
    {#each data.viajes as v (v.id)}
      <li><strong>{v.titulo}</strong> — {v.fechaInicio} a {v.fechaFin} — R$ {v.presupuesto}</li>
    {/each}
  </ul>
{/if}

<style>
  form { display: flex; flex-direction: column; gap: 0.75rem; max-width: 420px; }
  label { display: flex; flex-direction: column; font-weight: 500; }
  input, select { padding: 0.4rem; border: 1px solid #ccc; border-radius: 4px; }
  button { padding: 0.6rem; background: #1e3a8a; color: white; border: none; border-radius: 4px; cursor: pointer; }
  button:hover { background: #16306e; }
  .ok { color: green; font-weight: bold; }
  .err { color: #c00; font-size: 0.85rem; }
</style>