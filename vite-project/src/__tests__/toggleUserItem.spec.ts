import { describe, it, expect } from '@jest/globals';

type Item = { id: number; name: string };

const MAX_USER_SELECTION = 6;

function toggleUserItem(item: Item, selected: Item[]): Item[] {
  const index = selected.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    return selected.filter((i) => i.id !== item.id);
  }
  if (selected.length >= MAX_USER_SELECTION) return selected;
  return [...selected, item];
}

describe('toggleUserItem()', () => {
  const item1 = { id: 1, name: 'Shoes 1' };
  const item2 = { id: 2, name: 'Shoes 2' };

  it('добавляет элемент, если его нет', () => {
    const result = toggleUserItem(item1, []);
    expect(result).toEqual([item1]);
  });

  it('удаляет элемент, если он уже есть', () => {
    const result = toggleUserItem(item1, [item1, item2]);
    expect(result).toEqual([item2]);
  });

  it('не добавляет, если уже 6 элементов', () => {
    const many = Array.from({ length: 6 }, (_, i) => ({ id: i, name: `Item ${i}` }));
    const result = toggleUserItem({ id: 99, name: 'Extra' }, many);
    expect(result.length).toBe(6);
    expect(result.find((i) => i.id === 99)).toBeUndefined();
  });
});
