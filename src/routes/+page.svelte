<script lang="ts">
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();
</script>

List of Survey

{#each data.survey as s}
  {s.name} {s.description}
{/each}
