export function slugifyTag(tag: string): string {
  return tag.trim().toLowerCase().replace(/\s+/g, "-");
}
