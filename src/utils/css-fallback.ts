export function cssVar(name: string, fallback: string): string {
  return `var(${name}, ${fallback})`;
}
