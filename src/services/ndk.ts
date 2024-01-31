import NDKSvelte from "@nostr-dev-kit/ndk-svelte";
import NDKCacheAdapterDexie from "@nostr-dev-kit/ndk-cache-dexie";

const cacheAdapter = new NDKCacheAdapterDexie({ dbName: "ndk-cache" });

export const ndk = new NDKSvelte({
  explicitRelayUrls: ["wss://nostrue.com"],
  // explicitRelayUrls: ["ws://localhost:7000"],
  cacheAdapter,
});

ndk.connect();

if (import.meta.env.DEV) {
  //@ts-ignore
  window.ndk = ndk;
}
