<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { backInOut } from 'svelte/easing';
  import { scale } from 'svelte/transition';

  interface Props {
    children: Snippet;
    header: Snippet;
    question: Snippet;
    pagination?: Snippet;
    required?: boolean;
  }

  let { children, header, pagination, question, required }: Props = $props();

  let loaded = $state<boolean>(false);

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div
    class="absolute z-10 h-[640px] max-h-[640px] w-[800px] rounded-xl bg-neutral-200
        text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
    transition:scale={{ duration: 500, easing: backInOut }}
  >
    <div class="relative flex h-full flex-col">
      <div class="relative box-border min-h-0 flex-auto px-24 pb-10 pt-20">
        <div class="flex select-none items-center">
          <div class="text-sm font-medium text-neutral-800 dark:text-neutral-300">
            {@render header()}
          </div>
          <div
            class="mx-2 h-1 w-1 flex-shrink-0 self-center rounded bg-neutral-400
                  text-transparent dark:bg-neutral-700"
          >
            ·
          </div>
          {#if required}
            <div class="text-sm font-semibold text-blue-600 dark:text-blue-400">Required</div>
          {/if}
        </div>
        <h2 class="mb-6 mt-2 text-2xl font-semibold">{@render question()}</h2>
        <div>{@render children()}</div>
        <div></div>
      </div>
      <div class=" flex items-center justify-between rounded-bl-xl rounded-br-xl p-5">
        <button>Back</button>
        <div>{@render pagination?.()}</div>
        <button>Complete</button>
      </div>
    </div>
  </div>
{/if}
