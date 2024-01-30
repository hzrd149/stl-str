<script lang="ts">
  import { ndk } from "../../services/ndk";
  import { NDKKind } from "@nostr-dev-kit/ndk";
  import { Spinner } from "flowbite-svelte";
  import { onDestroy } from "svelte";
  import PartCard from "../../components/PartCard.svelte";

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
    <PartCard {part} />
  {/each}
</main>
