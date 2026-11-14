import type { PageServerLoad } from './$types';
import { destinos } from '#lib/server/db-mock.ts';

export const load: PageServerLoad = async () => {
  return { destinos };
};