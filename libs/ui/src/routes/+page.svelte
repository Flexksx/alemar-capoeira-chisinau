<script lang="ts">
	import type { Snippet } from 'svelte';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/accordion';
	import { Button, type ButtonSize, type ButtonVariant } from '$lib/components/button';
	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious
	} from '$lib/components/carousel';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/dropdown-menu';
	import { Badge, type BadgeVariant } from '$lib/components/badge';
	import { Input } from '$lib/components/input';
	import { Kbd } from '$lib/components/kbd';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/popover';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/toggle-group';

	const colors = [
		'background',
		'foreground',
		'card',
		'popover',
		'primary',
		'secondary',
		'muted',
		'muted-foreground',
		'accent',
		'destructive',
		'border',
		'ring'
	];
	const variants: ButtonVariant[] = [
		'default',
		'secondary',
		'outline',
		'ghost',
		'link',
		'destructive'
	];
	const sizes: ButtonSize[] = ['sm', 'default', 'lg'];
	const badgeVariants: BadgeVariant[] = ['default', 'secondary', 'outline'];
</script>

{#snippet section(title: string, body: Snippet)}
	<section class="grid gap-px overflow-hidden rounded-lg border md:grid-cols-2">
		{#each ['light', 'dark'] as theme (theme)}
			<div class="{theme} bg-background text-foreground flex flex-col gap-4 p-6">
				<h2 class="font-impact text-muted-foreground text-xl tracking-wide">
					{title} <span class="text-sm">· {theme}</span>
				</h2>
				{@render body()}
			</div>
		{/each}
	</section>
{/snippet}

{#snippet swatches()}
	<div class="grid grid-cols-3 gap-3 sm:grid-cols-4">
		{#each colors as color (color)}
			<div class="flex flex-col gap-1">
				<div class="h-12 rounded-md border" style="background: var(--{color})"></div>
				<span class="text-xs">{color}</span>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet typography()}
	<p class="font-display text-4xl">Alemar Capoeira</p>
	<p class="font-impact text-3xl tracking-wide">Roda de capoeira</p>
	<p class="text-base">Body text in the default sans-serif font.</p>
	<p class="text-muted-foreground text-sm">Muted helper text.</p>
{/snippet}

{#snippet buttons()}
	{#each sizes as size (size)}
		<div class="flex flex-wrap items-center gap-2">
			{#each variants as variant (variant)}
				<Button {variant} {size}>{variant}</Button>
			{/each}
		</div>
	{/each}
	<div class="flex gap-2">
		<Button disabled>disabled</Button>
		<Button href="#buttons" variant="outline">as link</Button>
	</div>
{/snippet}

{#snippet inputs()}
	<Input placeholder="Search songs" />
	<Input placeholder="Disabled" disabled />
	<Input placeholder="Invalid" aria-invalid="true" />
{/snippet}

{#snippet badges()}
	<div class="flex flex-wrap items-center gap-2">
		{#each badgeVariants as variant (variant)}
			<Badge {variant}>{variant}</Badge>
			<Badge {variant} size="sm">{variant} sm</Badge>
		{/each}
	</div>
{/snippet}

{#snippet toggleGroup()}
	<ToggleGroup type="single" value="original" aria-label="Lyrics language">
		<ToggleGroupItem value="original">Original</ToggleGroupItem>
		<ToggleGroupItem value="transcription">Transcription</ToggleGroupItem>
		<ToggleGroupItem value="translation">Translation</ToggleGroupItem>
	</ToggleGroup>
	<ToggleGroup type="multiple" value={['angola']} aria-label="Categories">
		<ToggleGroupItem value="angola">Angola</ToggleGroupItem>
		<ToggleGroupItem value="regional">Regional</ToggleGroupItem>
		<ToggleGroupItem value="samba" disabled>Samba</ToggleGroupItem>
	</ToggleGroup>
{/snippet}

{#snippet kbd()}
	<p class="text-sm">Press <Kbd>/</Kbd> or <Kbd>Ctrl</Kbd> <Kbd>K</Kbd> to search.</p>
{/snippet}

{#snippet accordion()}
	<Accordion type="single">
		{#each ['Angola', 'Regional', 'Maculelê'] as name (name)}
			<AccordionItem value={name}>
				<AccordionTrigger>{name}</AccordionTrigger>
				<AccordionContent>Songs in the {name} category.</AccordionContent>
			</AccordionItem>
		{/each}
	</Accordion>
{/snippet}

{#snippet carousel()}
	<Carousel class="mx-12">
		<CarouselContent>
			{#each [1, 2, 3, 4] as n (n)}
				<CarouselItem>
					<div class="bg-card flex h-32 items-center justify-center rounded-lg border">
						<span class="font-impact text-4xl">{n}</span>
					</div>
				</CarouselItem>
			{/each}
		</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	</Carousel>
{/snippet}

{#snippet overlays()}
	<div class="flex gap-2">
		<DropdownMenu>
			<DropdownMenuTrigger>Language</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Română</DropdownMenuItem>
				<DropdownMenuItem>Русский</DropdownMenuItem>
				<DropdownMenuItem>English</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
		<Popover>
			<PopoverTrigger>Popover</PopoverTrigger>
			<PopoverContent>Popover content.</PopoverContent>
		</Popover>
	</div>
	<p class="text-muted-foreground text-xs">Menus open in a portal, so they use the page theme.</p>
{/snippet}

<main class="bg-background text-foreground mx-auto flex max-w-6xl flex-col gap-8 p-4 md:p-8">
	<header>
		<h1 class="font-display text-5xl">Alemar UI</h1>
		<p class="text-muted-foreground">Every design system element in light and dark themes.</p>
	</header>
	{@render section('Colors', swatches)}
	{@render section('Typography', typography)}
	<div id="buttons">{@render section('Button', buttons)}</div>
	{@render section('Input', inputs)}
	{@render section('Badge', badges)}
	{@render section('Toggle group', toggleGroup)}
	{@render section('Kbd', kbd)}
	{@render section('Accordion', accordion)}
	{@render section('Carousel', carousel)}
	{@render section('Dropdown menu and popover', overlays)}
</main>
