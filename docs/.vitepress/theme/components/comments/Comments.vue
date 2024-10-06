<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus m-3">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="yanaginx/yanaginx.github.io"
      data-repo-id="R_kgDOI_Z_iw"
      data-category="Announcements"
      data-category-id="DIC_kwDOI_Z_i84CjG2S"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="en"
      data-theme="transparent_dark"
      data-loading="lazy"
      async
    />
  </div>
</template>