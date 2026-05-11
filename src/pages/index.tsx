import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

type IconName = 'package' | 'layers' | 'terminal' | 'shield' | 'network' | 'code';

const icons: Record<IconName, React.JSX.Element> = {
  package: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.5 12 3 3 8.5v7L12 21l9-5.5v-7Z" /><path d="m3.5 9 8.5 5 8.5-5" /><path d="M12 14v6.5" /></svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 5 5-5 5" /><path d="M12 17h8" /></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="M9 12l2 2 4-5" /></svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M18 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M7.8 7.2 15.2 10.8" /><path d="M7.8 16.8 15.2 13.2" /><path d="M6 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></svg>
  ),
};

const pillars = [
  {
    title: '使用 xlings',
    icon: 'terminal' as IconName,
    description: '安装工具链、切换版本、创建隔离工作空间，并用 .xlings.json 复现项目环境。',
    link: '/docs/intro',
    action: '快速开始',
  },
  {
    title: '浏览软件包',
    icon: 'package' as IconName,
    description: '从官方和社区索引中搜索 xpkg，查看平台支持、版本和源码入口。',
    link: 'https://openxlings.github.io/xim-pkgindex/',
    action: '打开包索引',
  },
  {
    title: '创建 xpkg',
    icon: 'code' as IconName,
    description: '用 Lua 描述软件、配置、运行时、脚本和项目模板，让它们都能被一条命令安装。',
    link: '/docs/xpkg/create-xpkg',
    action: '创建 XPackage',
  },
];

const ecosystem = [
  {
    name: 'xlings',
    description: '跨平台包管理器、版本管理器与 SubOS 环境入口。',
    href: 'https://github.com/openxlings/xlings',
  },
  {
    name: 'xim-pkgindex',
    description: '官方 xpkg 包索引，承载包定义、子索引和包测试。',
    href: 'https://github.com/openxlings/xim-pkgindex',
  },
  {
    name: 'libxpkg',
    description: 'xpkg 规范的 C++23 实现，负责解析、索引与执行。',
    href: 'https://github.com/openxlings/libxpkg',
  },
  {
    name: 'xpkgindex',
    description: '包索引站点生成器，为搜索和包详情页提供前端。',
    href: 'https://github.com/openxlings/xpkgindex',
  },
];

type TerminalLine =
  | { kind: 'shell' | 'subos'; prompt: string; command: string }
  | { kind: 'success' | 'path' | 'notice' | 'output'; text: string };

const terminalLines: TerminalLine[] = [
  { kind: 'shell', prompt: '~>', command: 'xlings subos new dev' },
  { kind: 'success', text: '  ✓ subos created: dev' },
  { kind: 'shell', prompt: '~>', command: 'xlings subos use dev' },
  { kind: 'notice', text: '  ▸ entering subos dev' },
  { kind: 'subos', prompt: '[xsubos:dev] ~>', command: 'xlings install node@24' },
  { kind: 'output', text: 'xim:node@24.4.1 is already installed' },
  { kind: 'subos', prompt: '[xsubos:dev] ~>', command: 'node --version' },
  { kind: 'output', text: 'v24.4.1' },
];

function Hero(): React.JSX.Element {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <p className="eyebrow">开放的包管理基础设施</p>
        <h1>万物皆可成包</h1>
        <p className="home-hero__lead">
          OpenXlings 将包定义、工具版本、隔离工作空间和可搜索索引连接成一套可复现的开发工作流。
        </p>
        <div className="home-hero__actions">
          <Link className="button button--primary button--lg" to="/docs/intro">
            开始使用 xlings
          </Link>
          <Link className="button button--secondary button--lg" to="/projects">
            查看项目生态
          </Link>
        </div>
      </div>
      <div className="home-hero__terminal" aria-label="xlings command preview">
        <div className="terminal-shell__bar">
          <span>openxlings</span>
          <span>subos:dev</span>
        </div>
        <div className="terminal-shell__body">
          {terminalLines.map((line, index) => (
            <pre className={`terminal-line terminal-line--${line.kind}`} key={index}>
              {'command' in line ? (
                <>
                  <span className="terminal-prompt">{line.prompt}</span>
                  <span className="terminal-command"> {line.command}</span>
                </>
              ) : (
                line.text
              )}
            </pre>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars(): React.JSX.Element {
  return (
    <section className="home-section">
      <div className="section-heading">
        <p className="eyebrow">主要入口</p>
        <h2>从使用、浏览到创建包</h2>
      </div>
      <div className="pillar-grid">
        {pillars.map((item) => (
          <article className="pillar-card" key={item.title}>
            <div className="icon-box">{icons[item.icon]}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={item.link}>{item.action}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Ecosystem(): React.JSX.Element {
  return (
    <section className="home-section home-section--muted">
      <div className="section-heading">
        <p className="eyebrow">项目生态</p>
        <h2>OpenXlings 项目</h2>
      </div>
      <div className="ecosystem-list">
        {ecosystem.map((project) => (
          <div className="ecosystem-row" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <Link to={project.href}>GitHub</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities(): React.JSX.Element {
  return (
    <section className="home-section">
      <div className="capability-grid">
        <div className="capability-item">
          <div className="icon-box">{icons.layers}</div>
          <h2>版本视图，而不是全局污染</h2>
          <p>每个 subos 拥有独立工具映射，底层 payload 共享复用。项目可以用 .xlings.json 固定工具版本。</p>
        </div>
        <div className="capability-item">
          <div className="icon-box">{icons.shield}</div>
          <h2>Sandbox 用于干净实验</h2>
          <p>Linux 上通过 bwrap/proot 提供文件系统视图隔离，适合构建、测试和 agent 自动化场景。</p>
        </div>
        <div className="capability-item">
          <div className="icon-box">{icons.network}</div>
          <h2>索引可以去中心化</h2>
          <p>官方索引、子索引和自托管索引都通过命名空间组织，降低包生态扩展成本。</p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="OpenXlings"
      description="面向工具、版本、工作空间和包索引的开放包管理基础设施">
      <main>
        <Hero />
        <Pillars />
        <Ecosystem />
        <Capabilities />
      </main>
    </Layout>
  );
}
