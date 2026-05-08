<script setup lang="ts">
import { useData } from 'vitepress'
import usePosts from '../../composables/usePosts'

const { allPosts: posts } = usePosts()

const { theme } = useData()
</script>

<template>
  <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 class="blog-list-title">
        {{ theme.blog?.title }}
      </h2>
      <p class="blog-list-desc">
        {{ theme.blog?.description }}
      </p>
    </div>
    <div class="p-2 grid gap-6 lg:grid-cols-2">
      <div v-for="post of posts">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Swiss–Bauhaus blog list header */
.blog-list-title {
  font-family: 'Space Grotesk', 'Inter', ui-sans-serif, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.75rem;
}

.blog-list-desc {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
</style>

