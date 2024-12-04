<script lang="ts">
  import { element } from '$components';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<div class="flex h-full w-full max-w-5xl flex-col items-center justify-center space-y-5">
  <div class="text-3xl font-bold">List of Survey</div>

  <div class="w-full">
    <ul class="w-full space-y-3 px-5">
      {#each data.survey as s}
        <li class="w-full">
          <element.Anchor
            href="/survey/{s.id}"
            data-sveltekit-preload-data="tap"
            class="flex h-full w-full flex-col gap-y-3 rounded-lg bg-neutral-200 p-3 transition-colors duration-200 hover:bg-neutral-300"
          >
            <h3 class="text-3xl font-bold">{s.name}</h3>
            <div>{s.description}</div>
          </element.Anchor>
        </li>
      {/each}
    </ul>
  </div>
</div>
