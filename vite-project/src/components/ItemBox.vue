<template>
    <div @click="toggle" :class="['item-box', { selected }]">
        {{ item.name }}
    </div>
</template>

<script setup lang="ts">
import type { Item } from '@/types';
defineProps<{
    item: Item;
    selected: boolean;
    toggle: () => void;
}>();
</script>