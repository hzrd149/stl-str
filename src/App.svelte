<script lang="ts">
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import NotFound from "./pages/404.svelte";
  import Home from "./pages/Home.svelte";
  import TopNav from "./components/TopNav.svelte";

  const routes = {
    "/": Home,
    "/parts": wrap({
      asyncComponent: () => import("./pages/Parts.svelte"),
    }),
    "/upload": wrap({
      asyncComponent: () => import("./pages/upload/Upload.svelte"),
    }),
    "*": NotFound,
  };
</script>

<TopNav />
<div class="mx-auto flex w-full flex-col gap-2 md:max-w-screen-md">
  <Router {routes} />
</div>
