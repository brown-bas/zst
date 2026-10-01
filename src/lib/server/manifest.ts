import { imgUrl, type Manifest } from "$lib/manifest";

const TTL_MS = 5 * 60 * 1000;
let cache: { data: Manifest; at: number } | null = null;

export async function getManifest(fetchFn: typeof fetch): Promise<Manifest> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  const res = await fetchFn(imgUrl("manifest.json"));
  if (!res.ok) throw new Error(`Could not load manifest.json (${res.status})`);
  const data: Manifest = await res.json();
  cache = { data, at: Date.now() };
  return data;
}
