<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import groupPhoto from '$lib/assets/photos/20250815_195516.jpg';

	const lang = useLanguageStore();
</script>

<section class="relative overflow-hidden py-24 md:py-36" id="about">
	<!-- Subtle geo background -->
	<div class="absolute inset-0 geo-pattern opacity-[0.04]"></div>

	<div class="relative mx-auto max-w-6xl px-6 md:px-10">
		<div class="grid gap-16 md:grid-cols-2 md:gap-24 md:items-center">
			<!-- Left: title + quote -->
			<div>
				<h2 class="font-impact text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-[0.04em] text-foreground mb-8">
					{lang.t.about.title}
				</h2>

				<div class="relative pl-6 mb-10">
					<span class="absolute left-0 top-0 h-full w-px bg-primary"></span>
					<blockquote class="font-display italic text-xl md:text-2xl text-primary/90 leading-relaxed">
						"{lang.t.about.quote}"
					</blockquote>
				</div>

				<p class="text-sm font-medium tracking-[0.25em] uppercase text-foreground/40">
					{lang.t.about.highlight}
				</p>
			</div>

			<!-- Right: body + photo -->
			<div class="flex flex-col gap-8">
				<p class="text-foreground/70 text-lg leading-relaxed">
					{lang.t.about.body}
				</p>

				<div
					class="relative aspect-[4/3] overflow-hidden bg-card"
					style="clip-path: polygon(0 0, 100% 0, 100% 90%, 92% 100%, 0 100%)"
				>
					<img
						src={groupPhoto}
						alt="Alemar Capoeira Chișinău"
						class="h-full w-full object-cover object-center"
						onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
					/>
					<!-- Placeholder when no photo -->
					<div class="absolute inset-0 flex items-center justify-center bg-card -z-10">
						<span class="font-impact text-6xl text-border tracking-widest">CAPOEIRA</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom diamond divider -->
	<div class="mt-24 flex items-center gap-0 overflow-hidden">
		<div class="h-px flex-1 bg-border/30"></div>
		<div class="flex gap-3 px-6">
			{#each [0, 1, 2] as i}
				<span
					class="inline-block h-2 w-2 rotate-45 {i === 1 ? 'bg-primary' : 'bg-border/30'}"
				></span>
			{/each}
		</div>
		<div class="h-px flex-1 bg-border/30"></div>
	</div>
</section>
