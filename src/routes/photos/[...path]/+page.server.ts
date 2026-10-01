import { error } from "@sveltejs/kit";
import { countImages, findFolder, type Entry } from "$lib/manifest";
import { getManifest } from "$lib/server/manifest";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch, setHeaders }) => {
  const segments = params.path ? params.path.split("/").filter(Boolean) : [];

  const entries = findFolder((await getManifest(fetch)).children, segments);
  if (!entries) error(404, "A mappa nem található");

  setHeaders({
    "cache-control":
      "public, max-age=0, s-maxage=60, stale-while-revalidate=600",
  });

  const folders = entries
    .filter((e): e is Extract<Entry, { type: "folder" }> => e.type === "folder")
    .map((f) => ({ name: f.name, count: countImages(f.children) }));
  const images = entries.filter((e) => e.type === "image");

  return { segments, folders, images };
};
