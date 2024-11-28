<script lang="ts">
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-5">
  <div class="text-3xl font-bold">List of Survey</div>

  <div class="w-full">
    <ul class="w-full space-y-3 px-5">
      {#each data.survey as s}
        <li class="w-full">
          <a
            href="/survey/{s.id}"
            class="h-full w-full bg-neutral-400 transition-colors duration-200 hover:bg-neutral-600"
          >
            <h3>{s.name}</h3>
            <div>{s.description}</div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
