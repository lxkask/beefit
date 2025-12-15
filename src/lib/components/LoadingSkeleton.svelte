<script lang="ts">
  let { type = 'card', count = 1 } = $props<{ type?: 'card' | 'table' | 'text'; count?: number }>();
</script>

{#if type === 'card'}
  {#each Array(count) as _, i}
    <div class="animate-pulse bg-grey/50 rounded-lg p-6 mb-4">
      <div class="h-6 bg-yellow/20 rounded w-3/4 mb-4"></div>
      <div class="h-4 bg-white/10 rounded w-full mb-2"></div>
      <div class="h-4 bg-white/10 rounded w-5/6"></div>
    </div>
  {/each}
{:else if type === 'table'}
  <div class="animate-pulse">
    <div class="h-12 bg-yellow/20 rounded-t mb-2"></div>
    {#each Array(count || 5) as _, i}
      <div class="h-10 bg-white/5 rounded mb-1"></div>
    {/each}
  </div>
{:else if type === 'text'}
  <div class="animate-pulse space-y-2">
    {#each Array(count || 3) as _, i}
      <div class="h-4 bg-white/10 rounded w-full"></div>
    {/each}
    <div class="h-4 bg-white/10 rounded w-2/3"></div>
  </div>
{/if}

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
