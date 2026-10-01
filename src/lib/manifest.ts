import { PUBLIC_IMG_BASE } from "$env/static/public";
import { resolve } from "$app/paths";
import type { ResolvedPathname } from "$app/types";

export type ImageEntry = {
  type: "image";
  name: string;
  original: string;
  thumb: string;
  preview: string;
  width: number;
  height: number;
  size: number;
  animated?: boolean;
};
export type FolderEntry = { type: "folder"; name: string; children: Entry[] };
export type Entry = ImageEntry | FolderEntry;
export type Manifest = { generated: string; children: Entry[] };

export function imgUrl(key: string): string {
  return `${PUBLIC_IMG_BASE}/${key.split("/").map(encodeURIComponent).join("/")}`;
}

export function folderHref(segments: string[]): ResolvedPathname {
  return resolve("/photos/[...path]", {
    path: segments.map(encodeURIComponent).join("/"),
  });
}

export function findFolder(root: Entry[], segments: string[]): Entry[] | null {
  let current = root;
  for (const segment of segments) {
    const name = segment.normalize();
    const next = current.find(
      (e): e is FolderEntry =>
        e.type === "folder" && e.name.normalize() === name,
    );
    if (!next) return null;
    current = next.children;
  }
  return current;
}

export function countImages(entries: Entry[]): number {
  return entries.reduce(
    (n, e) => n + (e.type === "image" ? 1 : countImages(e.children)),
    0,
  );
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
