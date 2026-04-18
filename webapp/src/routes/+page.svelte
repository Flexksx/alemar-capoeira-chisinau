<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if "empty" in data && data.empty}
  <main
    class="flex min-h-dvh items-center justify-center p-6 text-muted-foreground"
  >
    <p>No songs configured.</p>
  </main>
{/if}
