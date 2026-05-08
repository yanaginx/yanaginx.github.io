<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="reading-progress-track">
    <div class="reading-progress-bar" :style="{ width: progress + '%' }" />
  </div>
</template>

<style scoped>
.reading-progress-track {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9999;
  pointer-events: none;
  background: transparent;
}

.reading-progress-bar {
  height: 100%;
  background: var(--vp-c-brand-1);
  transition: width 0.1s linear;
}
</style>
