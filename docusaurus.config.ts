import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenXlings',
  tagline: '万物皆可成包',
  favicon: 'img/favicon.ico',

  future: {
    v4: false, // rspack native binding unavailable on this system
  },

  url: 'https://openxlings.github.io',
  baseUrl: '/',

  organizationName: 'openxlings',
  projectName: 'openxlings.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { label: '中文' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/openxlings/openxlings.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/openxlings/openxlings.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'platform-status',
      content:
        'xlings 当前在 Linux 平台适配较好，macOS 和 Windows 平台正在逐步适配中。',
      backgroundColor: '#0f766e',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'OpenXlings',
      // logo: { alt: 'OpenXlings Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        { to: '/projects', label: '项目', position: 'left' },
        {
          href: 'https://openxlings.github.io/xim-pkgindex/',
          label: '包索引',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/openxlings/xlings',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: '快速开始', to: '/docs/intro' },
            { label: 'CLI 参考', to: '/docs/reference/cli' },
            { label: '创建 XPackage', to: '/docs/xpkg/create-xpkg' },
          ],
        },
        {
          title: '项目',
          items: [
            { label: 'xlings', href: 'https://github.com/openxlings/xlings' },
            { label: 'xim-pkgindex', href: 'https://github.com/openxlings/xim-pkgindex' },
            { label: 'libxpkg', href: 'https://github.com/openxlings/libxpkg' },
          ],
        },
        {
          title: '社区',
          items: [
            { label: '论坛', href: 'https://forum.d2learn.org/category/9/xlings' },
            { label: 'GitHub', href: 'https://github.com/openxlings' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenXlings.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'lua', 'powershell', 'toml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
