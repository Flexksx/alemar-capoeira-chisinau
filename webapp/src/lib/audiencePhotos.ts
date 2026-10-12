import type { Audience } from '$lib/audiences';
import kids from '$lib/assets/photos/bicho_micho.jpg';
import adults from '$lib/assets/photos/verandamall.jpg';
import culture from '$lib/assets/photos/serginho.jpg';

export const audiencePhotos: Record<Audience, string> = { kids, adults, culture };
