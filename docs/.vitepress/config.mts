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
  documentRootPath: '/docs',
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DV Depot",
  description: "Casual thoughts, musings and whatever else is on the mind.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Notes',
      link: '/notes/',
      activeMatch: '/notes/'
    },
    {
      text: 'Blogs',
      link: '/blog/',
      activeMatch: '/blog/'
    },
  ]
}