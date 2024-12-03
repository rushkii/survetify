<script>
  import intro from '$assets/img/intro-survey-sample.webp?enhanced';

  let { children } = $props();
</script>

<div class="relative flex h-full w-full items-center justify-center">
  <enhanced:img src={intro} alt="Intro" class="h-screen w-screen object-cover" />
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div
    class="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/80 from-40% to-black/20 to-100%"
  />
  <div class="absolute left-0 top-0 flex h-full w-full items-center justify-center">
    {@render children()}
  </div>
</div>
