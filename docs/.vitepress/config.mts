import Unocss from 'unocss/vite'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

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
  excludePattern: ['blog/**', 'extras/**'],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DV Depot",
  description: "Casual thoughts, musings and whatever else is on the mind.",
  cleanUrls: true,
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
      { icon: 'github', link: 'https://github.com/yanaginx/yanaginx.github.io' }
    ],

    search: {
      provider: 'local'
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
    }
  },
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
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