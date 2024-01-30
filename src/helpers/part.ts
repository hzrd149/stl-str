import type { NDKEvent, NDKKind, NostrEvent } from "@nostr-dev-kit/ndk";
import { nip19 } from "nostr-tools";

export function getPartThumbnail(thing: NDKEvent | NostrEvent) {
  return thing.tags.find((t) => t[0] === "thumb")?.[1];
}

export function getPartNevent(thing: NDKEvent) {
  return nip19.neventEncode({
    id: thing.id,
    author: thing.author.pubkey,
    kind: thing.kind,
  });
}
