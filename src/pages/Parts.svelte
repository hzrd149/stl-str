<script lang="ts">
  import { ndk } from "../services/ndk";
  import { NDKKind } from "@nostr-dev-kit/ndk";
  import { Spinner } from "flowbite-svelte";
  import { onDestroy } from "svelte";

  const parts = ndk.storeSubscribe([
    { kinds: [NDKKind.Media], "#m": ["model/stl"] },
  ]);

  onDestroy(() => {
    parts.unsubscribe();
  });
</script>

<main>
  {#if $parts.length === 0}
    <div class="text-center">
      <Spinner />
    </div>
  {/if}
  {#each $parts as part}
    <pre>{JSON.stringify(part.rawEvent())}</pre>
  {/each}
</main>
