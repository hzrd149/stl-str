<script lang="ts">
  import dayjs from "dayjs";
  import { Button } from "flowbite-svelte";
  import type { NDKEvent } from "@nostr-dev-kit/ndk";
  import magnetSrc from "../../assets/untitledui-icons/magnet.svg";
  import { getTagValue } from "../../helpers/event";
  import { formatBytes } from "../../helpers/number";
  import Magnet from "../../components/icons/magnet.svelte";
  import Download from "../../components/icons/download.svelte";

  export let file: NDKEvent;
  let thumbnail: string | undefined = "";
  $: type = getTagValue(file, "m") ?? "unknown";
  $: size = getTagValue(file, "size");
  $: magnet = getTagValue(file, "magnet");

  $: {
    if (type === "model/stl")
      thumbnail = getTagValue(file, "thumb") || getTagValue(file, "image");
    else if (type.startsWith("image/")) thumbnail = getTagValue(file, "url");
    else thumbnail = undefined;
  }
</script>

<div
  class="relative flex w-full flex-col divide-gray-200 rounded-lg border border-gray-200 bg-white p-2 text-gray-500 shadow-md dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 md:flex-row"
>
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src={thumbnail}
    alt={getTagValue(file, "summary") ?? "File"}
  />
  <div class="flex w-full flex-col gap-2">
    <div class="flex items-center gap-2">
      <p class="font-bold text-gray-900 dark:text-white">
        {getTagValue(file, "name")}
      </p>
      <Button
        class="ml-auto !p-2"
        size="xs"
        href={getTagValue(file, "url")}
        target="_blank"
        outline
        download={getTagValue(file, "name")}
        ><Download class="mr-1 h-4 w-4" />Download</Button
      >
      {#if magnet}
        <Button href={magnet} target="_blank" size="xs" class="!p-2">
          <Magnet class="h-4 w-4" /></Button
        >
      {/if}
    </div>
    <div>
      <p>Size: {size ? formatBytes(parseInt(size)) : "unknown"}</p>
      <p>Created: {dayjs.unix(file.created_at ?? 0).format("lll")}</p>
    </div>
  </div>
</div>
