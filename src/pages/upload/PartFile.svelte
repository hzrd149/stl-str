<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { formatBytes } from "../../helpers/number";
  import { createEventDispatcher } from "svelte";

  export let file: File;

  const dispatch = createEventDispatcher()
</script>

<div class="flex items-center space-x-4 rtl:space-x-reverse">
  <!-- <Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0" /> -->
  <div class="min-w-0 flex-1">
    <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
      {file.name}
    </p>
    <p class="truncate text-sm text-gray-500 dark:text-gray-400">
      {"metadata"}
    </p>
  </div>
  <div
    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
  >
    {formatBytes(file.size)}
  </div>
  <Button size="sm" outline on:click={() => dispatch('remove')}>Remove</Button>
</div>
