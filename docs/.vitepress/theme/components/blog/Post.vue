<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Post } from '../../composables/posts.data'
import useAuthors from '../../composables/useAuthors'
import PostIcon from './PostIcon.vue'
import PostAuthor from './PostAuthor.vue'

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
const { findByName } = useAuthors()
const author = findByName(props.post.author)
</script>

<template>
  <!-- Swiss–Bauhaus card: thick top accent bar, flat, sharp corners, no shadow -->
  <article class="post-card">
    <div class="post-meta">
      <PostIcon :post="post">
        <span class="post-date">{{ post.date.since }}</span>
      </PostIcon>
    </div>
    <h2 class="post-title">
      <a :href="`${site.base}blog${post.href}`">{{ post.title }}</a>
    </h2>
    <p class="post-excerpt" v-html="post.excerpt" />
    <div class="post-footer">
      <PostAuthor :author="author" />
      <a
        :href="`${site.base}blog${post.href}`"
        class="post-readmore"
      >
        Read →
      </a>
    </div>
  </article>
</template>

<style scoped>
/* Swiss–Bauhaus flat card */
.post-card {
  padding: 1.5rem;
  border-top: 3px solid var(--vp-c-brand-1);
  border-left: 1px solid var(--vp-c-divider);
  border-right: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  transition: border-top-color 0.15s ease;
}

.post-card:hover {
  border-top-color: var(--vp-c-brand-2);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-2);
}

.post-date {
  font-size: 0.75rem;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.post-title {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 0.65rem 0;
  letter-spacing: -0.01em;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.15s ease;
}

.post-title a:hover {
  color: var(--vp-c-brand-1);
}

.post-excerpt {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0 0 1.25rem 0;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-readmore {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: letter-spacing 0.15s ease;
}

.post-readmore:hover {
  letter-spacing: 0.12em;
}
</style>
