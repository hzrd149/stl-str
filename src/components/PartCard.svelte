<script lang="ts">
  import type { NDKEvent } from "@nostr-dev-kit/ndk";
  import { Button, Card } from "flowbite-svelte";
  import { getPartNevent, getPartThumbnail } from "../helpers/part";
  import { getTagValue } from "../helpers/event";
  import UserLink from "./UserLink.svelte";
  export let part: NDKEvent;
</script>

<Card
  img={getPartThumbnail(part)}
  size="xs"
  href={`#/part/${getPartNevent(part)}`}
>
  <div class="overflow-hidden">
    <h4 class="text-lg font-bold text-black dark:text-white">
      {getTagValue(part, "name")}
    </h4>
    <UserLink user={part.author} />
  </div></Card
>
