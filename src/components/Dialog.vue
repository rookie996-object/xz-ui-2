<template>
  <div class="fixed w-full h-full bg-white z-40"></div>
  <div v-if="props.visible" class="fixed top-2/4 left-2/4 shadow z-50">
    <header class="flex items-center justify-between px-4 py-3 border-b">
      <h3>{{ props.title }}</h3>
      <Button icon="close" type="text" />
    </header>
    <main class="px-4 py-3">内容</main>
    <slot></slot>
    <footer class="text-right px-4 py-3 border-t">
      <Button size="small">{{ props.confirmText }}</Button>
      <Button type="default" size="small">{{ props.cancelText }}</Button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  title: {
    type: String
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  cancelText: {
    type: String,
    default: '取消'
  }
});
</script>
