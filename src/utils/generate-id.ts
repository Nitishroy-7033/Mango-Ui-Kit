let counter = 0;

export function generateId(prefix = 'mango'): string {
  counter += 1;
  return `${prefix}-${counter}-${Math.random().toString(36).substring(2, 9)}`;
}

export function resetIdCounter(): void {
  counter = 0;
}
