import type { ParamMatcher } from '@sveltejs/kit';
import { audiences, type Audience } from '$lib/audiences';

// The type guard narrows params.audience to Audience in the generated route types.
export const match = ((param: string): param is Audience =>
	(audiences as readonly string[]).includes(param)) satisfies ParamMatcher;
