<script lang="ts">
  import type { PageServerData } from './$types';
  let { data }: { data: PageServerData } = $props();

  const currentQuestion = data.questions[0];
</script>

<div>
  <div>
    <p>{currentQuestion.question}</p>
  </div>
  <div>
    {#each currentQuestion.answers as { id, answer } (id)}
      <div>
        <label for="answer-{id}" class="cursor-pointer">
          <input type="checkbox" id="answer-{id}" value={id} class="cursor-pointer" />
          {answer}
        </label>
      </div>
    {/each}
  </div>
</div>
