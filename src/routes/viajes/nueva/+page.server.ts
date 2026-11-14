import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { destinos, viajes } from '#lib/server/db-mock.ts';

export const load: PageServerLoad = async () => {
  return { destinos, viajes };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    
    const titulo = data.get('titulo')?.toString().trim() ?? '';
    const destinoId = Number(data.get('destinoId'));
    const fechaInicio = data.get('fechaInicio')?.toString() ?? '';
    const fechaFin = data.get('fechaFin')?.toString() ?? '';
    const presupuesto = Number(data.get('presupuesto')) || 0;

    const errores: Record<string, string> = {};
    
    if (titulo.length < 3) errores.titulo = 'El título debe tener al menos 3 caracteres.';
    if (!destinoId) errores.destinoId = 'Selecciona un destino.';
    if (!fechaInicio) errores.fechaInicio = 'Ingresa la fecha de inicio.';
    if (!fechaFin) errores.fechaFin = 'Ingresa la fecha de fin.';
    if (fechaInicio && fechaFin && fechaFin < fechaInicio) errores.fechaFin = 'La fecha de fin debe ser posterior a la de inicio.';

    if (Object.keys(errores).length > 0) {
      return fail(400, { errores, titulo, destinoId, fechaInicio, fechaFin, presupuesto });
    }
    
    viajes.push({
      id: viajes.length + 1,
      titulo: titulo,
      destinoId: destinoId,
      fechaInicio: fechaInicio, 
      fechaFin: fechaFin,       
      presupuesto: presupuesto  
    });

    return { exito: true, titulo };
  }
};
