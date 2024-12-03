<script lang="ts">
  import ModalQuestion from '$components/ModalQuestion.svelte';
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  const currentQuestion = data.questions[0];
</script>

<ModalQuestion required>
  {#snippet header()}
    Question 1 of 1
  {/snippet}
  {#snippet question()}
    {@html currentQuestion.question}
  {/snippet}
  <div>
    {#each currentQuestion.answers as { id, answer } (id)}
      <label for="answer-{id}" class="flex cursor-pointer gap-x-2">
        <input type="checkbox" id="answer-{id}" value={id} class="cursor-pointer" />
        {@html answer}
      </label>
    {/each}
  </div>
</ModalQuestion>
