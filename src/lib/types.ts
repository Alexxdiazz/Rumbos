export type Destino = {
  id: number;
  nombre: string;
  pais: string;
  continente: string;
  descripcion: string;
};

export type Viaje = {
  id: number;
  titulo: string;
  destinoId: number;
  fechaInicio: string;  
  fechaFin: string;     
  presupuesto: number;   
};