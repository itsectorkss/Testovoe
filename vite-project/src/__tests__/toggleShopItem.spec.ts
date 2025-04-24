import { describe, it, expect } from '@jest/globals';

type Item = { id: number; name: string };

function toggleShopItem(item: Item, selected: Item | null): Item | null {
  return selected?.id === item.id ? null : item;
}

describe('toggleShopItem()', () => {
  const item1 = { id: 11, name: 'Jacket 1' };
  const item2 = { id: 12, name: 'Jacket 2' };

  it('устанавливает элемент, если ничего не выбрано', () => {
    const result = toggleShopItem(item1, null);
    expect(result).toEqual(item1);
  });

  it('снимает выбор, если элемент уже выбран', () => {
    const result = toggleShopItem(item1, item1);
    expect(result).toBeNull();
  });

  it('меняет выбранный элемент, если кликнули по другому', () => {
    const result = toggleShopItem(item2, item1);
    expect(result).toEqual(item2);
  });
});
