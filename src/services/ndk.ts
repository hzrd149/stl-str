import NDKSvelte from "@nostr-dev-kit/ndk-svelte";

export const ndk = new NDKSvelte({
  explicitRelayUrls: ["wss://nostrue.com"],
});

ndk.connect();

//@ts-ignore
window.ndk = ndk;