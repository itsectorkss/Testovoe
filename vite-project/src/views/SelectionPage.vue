<template>
    <div class="container">
        <div class="top">
            <div class="box">
                <ItemList :items="selectedUserItems" :selectedItems="selectedUserItems" :onToggle="() => { }" />
                <SelectionInfo :selectedCount="selectedUserItems.length" :max="MAX_USER_SELECTION" />
            </div>
            <div class="box">
                <div class="item-box selected">{{ selectedShopItem?.name || 'Выберите элемент' }}</div>
            </div>
        </div>

        <div class="bottom">
            <div class="box">
                <ItemList :items="userItems" :selectedItems="selectedUserItems" :onToggle="toggleUserItem" />
            </div>
            <div class="box">
                <ItemList :items="shopItems" :selectedItems="selectedShopItem ? [selectedShopItem] : []"
                    :onToggle="toggleShopItem" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ItemList from '../components/ItemList.vue';
import SelectionInfo from '../components/SelectionInfo.vue';
import type { Item, ToggleItemFn } from '@/types';

const MAX_USER_SELECTION = 6;

const userItems = [
    { id: 1, name: 'Shoes 1' }, { id: 2, name: 'Shoes 2' },
    { id: 3, name: 'Shoes 3' }, { id: 4, name: 'Shoes 4' },
    { id: 5, name: 'T-shirt 1' }, { id: 6, name: 'T-shirt 2' },
    { id: 7, name: 'T-shirt 3' }, { id: 8, name: 'T-shirt 4' }
];

const shopItems = [
    { id: 11, name: 'Jacket 1' }, { id: 12, name: 'Jacket 2' },
    { id: 13, name: 'Jacket 3' }, { id: 14, name: 'Jacket 4' },
    { id: 15, name: 'Hoodie 1' }, { id: 16, name: 'Hoodie 2' },
    { id: 17, name: 'Hoodie 3' }, { id: 18, name: 'Hoodie 4' }
];

const selectedUserItems = ref<Item[]>([]);
const selectedShopItem = ref<Item | null>(null);

const toggleUserItem: ToggleItemFn = (item: Item) => {
    const index = selectedUserItems.value.findIndex((i) => i.id === item.id);
    if (index !== -1) {
        selectedUserItems.value.splice(index, 1);
    } else if (selectedUserItems.value.length < MAX_USER_SELECTION) {
        selectedUserItems.value.push(item);
    }
};

const toggleShopItem: ToggleItemFn = (item: Item) => {
    selectedShopItem.value =
        selectedShopItem.value?.id === item.id ? null : item;
};
</script>
