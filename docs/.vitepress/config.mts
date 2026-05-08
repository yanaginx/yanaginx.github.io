import Unocss from 'unocss/vite'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

const vitepressSidebarOptions = {
  // {
    /*
     * For detailed instructions, see the links below:
     * https://vitepress-sidebar.cdget.com/guide/api
     */
    // documentRootPath: '/',
    // scanStartPath: null,
    // basePath: null,
    // resolvePath: null,
    // useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    // frontmatterTitleFieldName: 'title',
    // useFolderTitleFromIndexFile: false,
    // useFolderLinkFromIndexFile: false,
    // hyphenToSpace: true,
    // underscoreToSpace: true,
    // capitalizeFirst: false,
    // capitalizeEachWords: false,
    // collapsed: true,
    // collapseDepth: 2,
    // sortMenusByName: false,
    // sortMenusByFrontmatterOrder: false,
    // sortMenusByFrontmatterDate: false,
    // sortMenusOrderByDescending: false,
    // sortMenusOrderNumericallyFromTitle: false,
    // sortMenusOrderNumericallyFromLink: false,
    // sortFolderTo: null,
    // frontmatterOrderDefaultValue: 0,
    // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
    // removePrefixAfterOrdering: false,
    // prefixSeparator: '.',
    // excludeFilesByFrontmatterFieldName: 'exclude',
    // includeDotFiles: false,
    // includeRootIndexFile: false,
    // includeFolderIndexFile: false,
    // includeEmptyFolder: false,
    // rootGroupText: 'Contents',
    // rootGroupLink: 'https://github.com/jooy2',
    // rootGroupCollapsed: false,
    // convertSameNameSubFileToGroupIndexPage: false,
    // folderLinkNotIncludesFileName: false,
    // keepMarkdownSyntaxFromTitle: false,
    // debugPrint: false,
  // }
  sortMenusByFrontmatterOrder: true,
  documentRootPath: '/docs',
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  capitalizeFirst: true,
  collapsed: true,
  manualSortFileNameByPriority: ['notes/intro.md', 'notes'],
  useFolderTitleFromIndexFile: true,
  sortMenusOrderByDescending: true,
  excludePattern: ['blog/**', 'extras/**'],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DV Depot",
  description: "Casual thoughts, musings and whatever else is on the mind.",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'DV Depot',
      copyright: 'Copyright © 2022-2024 Duong Van',
    },

    editLink: {
      pattern: 'https://github.com/yanaginx/yanaginx.github.io/edit/vitepress_ver/docs/:path',
      text: 'Edit this page on GitHub',
    },

    nav: nav(),

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yanaginx/yanaginx.github.io' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/chanduong-van/'}
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: 'deep',
      label: 'On this page',
    },

    blog: {
      title: 'The Blogs',
      description: 'Random thought and implementation on the go.',
    },
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-black'
    },
    math: true,
    config(md) {
      md.use(InlineLinkPreviewElementTransform)
    },
  },
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-inline-link-preview/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-inline-link-preview',
        '@nolebase/ui',
      ],
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Notes',
      link: '/notes/intro',
      activeMatch: '/notes/'
    },
    {
      text: 'Blogs',
      link: '/blog/',
      activeMatch: '/blog/'
    },
    {
      text: 'Extras',
      items: [
        {
          text: 'About',
          link: '/extras/site-info'
        },
        {
          text: 'References',
          link: '/extras/references'
        }
      ]
    }
  ]
}