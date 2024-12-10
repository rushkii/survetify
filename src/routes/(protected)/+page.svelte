<script lang="ts">
  import { element } from '$components';
  import { fly } from 'svelte/transition';
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  let { data }: { data: PageData } = $props();

  let loaded = $state<boolean>(false);

  onMount(() => {
    loaded = true;
  });
</script>

<div class="flex h-full w-full max-w-5xl flex-col items-center justify-center space-y-5">
  <div class="text-3xl font-bold">List of Survey</div>

  <div class="w-full">
    <ul class="w-full space-y-3 px-5">
      {#each data.survey as s}
        {#if loaded}
          <li class="w-full" transition:fly={{ x: -100, duration: 1000 }}>
            <element.Anchor
              href="/survey/{s.id}"
              data-sveltekit-preload-data="tap"
              class="flex h-full w-full flex-col gap-y-3 rounded-lg bg-neutral-200 p-3 transition-colors duration-200 hover:bg-neutral-300"
            >
              <h3 class="text-3xl font-bold">{s.name}</h3>
              <div>{s.description}</div>
            </element.Anchor>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
