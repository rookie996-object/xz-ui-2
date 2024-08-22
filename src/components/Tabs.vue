<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  selected: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator(value: string) {
      return ['horizontal', 'vertical'].includes(value);
    }
  }
});
</script>
