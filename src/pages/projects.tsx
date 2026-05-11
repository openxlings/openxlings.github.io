import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const projects = [
  {
    id: 'xlings',
    name: 'xlings',
    type: '核心工具',
    description: '跨平台包管理器、版本管理器和 SubOS 环境入口，面向日常工具安装、项目环境复现和隔离实验。',
    href: 'https://github.com/openxlings/xlings',
    docs: '/docs/intro',
  },
  {
    id: 'xim-pkgindex',
    name: 'xim-pkgindex',
    type: '包索引',
    description: '官方 xpkg 包索引，保存包定义、版本矩阵、依赖声明和测试入口。',
    href: 'https://github.com/openxlings/xim-pkgindex',
    docs: 'https://openxlings.github.io/xim-pkgindex/',
  },
  {
    id: 'libxpkg',
    name: 'libxpkg',
    type: '规范实现',
    description: 'xpkg 规范的 C++23 实现，负责包模型、加载、索引、搜索和执行能力。',
    href: 'https://github.com/openxlings/libxpkg',
    docs: '/docs/xpkg/xpkg-spec',
  },
  {
    id: 'xpkgindex',
    name: 'xpkgindex',
    type: '站点生成器',
    description: '将 xim-pkgindex 生成可浏览、可搜索的包索引网站。',
    href: 'https://github.com/openxlings/xpkgindex',
    docs: 'https://openxlings.github.io/xim-pkgindex/',
  },
  {
    id: 'xim-pkgindex-awesome',
    name: 'xim-pkgindex-awesome',
    type: '子索引目录',
    description: '社区和专题子索引发现入口，帮助 xpkg 生态按命名空间扩展。',
    href: 'https://github.com/openxlings/xim-pkgindex-awesome',
    docs: 'https://github.com/openxlings/xim-pkgindex-awesome',
  },
  {
    id: 'xim-pkgindex-template',
    name: 'xim-pkgindex-template',
    type: '索引模板',
    description: '用于快速创建自托管 xpkg 索引仓库的模板。',
    href: 'https://github.com/openxlings/xim-pkgindex-template',
    docs: 'https://github.com/openxlings/xim-pkgindex-template',
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <Layout
      title="项目"
      description="OpenXlings 项目生态">
      <main className="projects-page">
        <section className="projects-hero">
          <p className="eyebrow">项目生态</p>
          <h1>OpenXlings 生态项目</h1>
          <p>
            OpenXlings 由核心工具、包索引、规范实现和站点生成器组成。这里提供每个项目的定位和入口，
            详细使用说明集中在文档和包索引中维护。
          </p>
        </section>
        <section className="project-grid">
          {projects.map((project) => (
            <article className="project-card" id={project.id} key={project.id}>
              <div className="project-card__meta">{project.type}</div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-card__actions">
                <Link to={project.href}>GitHub</Link>
                <Link to={project.docs}>文档</Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
