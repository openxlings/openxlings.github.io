import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '安装',
      items: ['install/linux', 'install/macos', 'install/windows'],
    },
    {
      type: 'category',
      label: '用户指南',
      items: [
        'guide/package-management',
        'guide/version-management',
        'guide/subos',
        'guide/sandbox',
      ],
    },
    {
      type: 'category',
      label: '创建 XPackage',
      items: ['xpkg/create-xpkg', 'xpkg/xpkg-spec'],
    },
    {
      type: 'category',
      label: '参考',
      items: ['reference/cli', 'reference/config'],
    },
    'faq',
  ],
};

export default sidebars;
