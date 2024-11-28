<script lang="ts">
  import type { PageServerData } from './$types';

  let { data }: { data: PageServerData } = $props();

  const currentQuestion = data.questions[0];
</script>

<div>
  <h1>{currentQuestion.question}</h1>
  <ul>
    {#each currentQuestion.answers as a}
      <li>{a}</li>
    {/each}
  </ul>
</div>
