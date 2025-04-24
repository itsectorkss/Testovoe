<template>
    <div class="selection-info">
        selected: {{ selectedCount }} / {{ max }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    selectedCount: number;
    max: number;
}>();
</script>