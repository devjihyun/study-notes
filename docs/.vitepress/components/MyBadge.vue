<template>
  <span :class="['my-badge', variantClass]"><slot>Badge</slot></span>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: "default" },
});

const variantClass = computed(() => {
  return props.variant === "primary" ? "primary" : "default";
});
</script>

<style scoped>
.my-badge {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
  background: #f3f4f6;
  color: #111827;
}
.my-badge.primary {
  background: #3b82f6;
  color: white;
}
</style>
