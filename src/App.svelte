<script lang="ts">
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import NotFound from "./pages/404.svelte";
  import Home from "./pages/home/Home.svelte";
  import TopNav from "./components/TopNav.svelte";

  const routes = {
    "/": Home,
    "/thing/:naddr": wrap({
      asyncComponent: () => import("./pages/thing/Thing.svelte"),
    }),
    "/parts": wrap({
      asyncComponent: () => import("./pages/parts/Parts.svelte"),
    }),
    "/upload": wrap({
      asyncComponent: () => import("./pages/upload/Upload.svelte"),
    }),
    "*": NotFound,
  };
</script>

<TopNav />
<div class="mx-auto flex w-full flex-col gap-2 px-2 pb-10 md:max-w-screen-md">
  <Router {routes} />
</div>
