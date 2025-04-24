import { describe, it, expect, jest } from '@jest/globals';
import { mount } from '@vue/test-utils';
import ItemBox from '../components/ItemBox.vue';

describe('ItemBox.vue', () => {
  const item = { id: 1, name: 'Shoes 1' };

  it('отображает имя вещи', () => {
    const wrapper = mount(ItemBox, {
      props: {
        item,
        selected: false,
        toggle: jest.fn(),
      },
    });

    expect(wrapper.text()).toContain('Shoes 1');
  });

  it('вызывает toggle при клике', async () => {
    const toggle = jest.fn();
    const wrapper = mount(ItemBox, {
      props: {
        item,
        selected: false,
        toggle,
      },
    });

    await wrapper.trigger('click');
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it('добавляет класс "selected", если selected = true', () => {
    const wrapper = mount(ItemBox, {
      props: {
        item,
        selected: true,
        toggle: jest.fn(),
      },
    });

    expect(wrapper.classes()).toContain('selected');
  });
});
