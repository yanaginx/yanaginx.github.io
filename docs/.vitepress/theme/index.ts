import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'
import './style.css'
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import HomeBauhaus from './components/HomeBauhaus.vue'
import Feature from './components/uno/Feature.vue'
import Posts from './components/blog/Posts.vue'
import Post from './components/blog/Post.vue'
import PostDetail from './components/blog/PostDetail.vue'
import PostIcon from './components/blog/PostIcon.vue'
import PostAuthor from './components/blog/PostAuthor.vue'
import AuthorDetail from './components/blog/AuthorDetail.vue'
import Layout from './Layout.vue'

// https://vitepress.dev/guide/custom-theme

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(NolebaseInlineLinkPreviewPlugin)

    app.component('HomeBauhaus', HomeBauhaus)
    app.component('Feature', Feature)
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
  },
  Layout: Layout
}
