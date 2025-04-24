<template>
    <div class="item-list">
        <ItemBox v-for="item in items" :key="item.id" :item="item" :selected="isSelected(item)"
            :toggle="() => onToggle(item)" />
    </div>
</template>
  
<script setup lang="ts">
import ItemBox from './ItemBox.vue';
import type { Item, ItemListProps } from '@/types';

const { items, selectedItems, onToggle } = defineProps<ItemListProps>();

const isSelected = (item: { id: number; name: string }) =>
    selectedItems.some((i) => i.id === item.id);

</script>
