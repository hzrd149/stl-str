<script lang="ts">
  import {
    Badge,
    Button,
    Fileupload,
    Input,
    Label,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import PartFile from "./PartFile.svelte";

  let tagInput = "";
  $: tags = tagInput
    .split(",")
    .map((t) => t.toLowerCase().trim().replaceAll(/\s/g, "-"))
    .filter(Boolean);
  let files: File[] = [];

  function handleFilesChange(e: Event) {
    const target = e.currentTarget as HTMLInputElement;
    files = files.concat(Array.from(target.files ?? []));
  }
  function removeFile(file: File) {
    files = files.filter((f) => f !== file);
  }

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    if (files.length === 0) alert("No files selected");
  }
</script>

{#each files as file}
  <PartFile {file} on:remove={() => removeFile(file)} />
{/each}

<Fileupload accept="model/stl" multi on:change={handleFilesChange} />

<form class="flex w-full flex-col gap-2" on:submit={submit}>
  <div class="flex gap-2">
    <img class="h-10 w-10 rounded-lg" alt="thumbnail" />
    <div class="flex w-full flex-col gap-2">
      <div class="flex gap-2">
        <div class="w-full">
          <Label for="name" class="mb-2 block">Name</Label>
          <Input id="name" autocomplete="off" />
        </div>
        <div class="w-full">
          <Label for="category" class="mb-2 block">Category</Label>
          <Select id="category"></Select>
        </div>
      </div>

      <div class="w-full">
        <Label for="description" class="mb-2 block">Description</Label>
        <Textarea id="description" rows="6" />
      </div>
      <div class="w-full">
        <Label for="tags" class="mb-2 block">Tags</Label>
        <Input id="tags" bind:value={tagInput} />
      </div>
      <div class="flex gap-1">
        {#each tags as tag}
          <Badge>{tag}</Badge>
        {/each}
      </div>
    </div>
  </div>
  <Button type="submit">Upload</Button>
</form>
