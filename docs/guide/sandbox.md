---
sidebar_position: 4
title: Sandbox 沙箱
---

# Sandbox 沙箱模式

Sandbox 是 SubOS 的文件系统隔离进入方式。与普通 subos 的 PATH/env 隔离不同，sandbox 通过 bwrap 或 proot 提供隔离的 `$HOME`、dotfile、`/tmp` 和最小 `/etc` 视图。

:::info 平台限制
Sandbox 模式仅支持 Linux。macOS 和 Windows 上不可用。
:::

## 创建并进入 Sandbox

Sandbox 不是创建时的独立类型，而是进入 subos 时的模式：

```bash
xlings subos new mybox
xlings subos use mybox --sandbox
```

xlings 会复用当前 shell，并为该 subos 懒初始化 sandbox 私有目录和最小系统文件。

如果需要指定后端，可以显式传入：

```bash
xlings subos use mybox --sandbox bwrap
xlings subos use mybox --sandbox proot
```

进入后你会发现：
- `$HOME` 指向 sandbox 私有的 `/home/<user>` 目录
- 所有 dotfile（`.gitconfig`、`.npm/`、`.cache/` 等）完全独立
- 优先使用 bwrap，受限环境下回退到 proot
- xlings 是 sandbox 内唯一的包管理器

## 在 Sandbox 中安装工具

```bash
# 进入 sandbox
xlings subos use mybox --sandbox

# 安装 gcc
xlings install gcc@15 -y
gcc --version

# 安装 node
xlings install node@24 -y
node --version
```

安装的工具仅在此 sandbox 内可见，不影响宿主环境或其他 subos。

## 三种 SubOS 模式对比

| | global | shell-level | sandbox |
|---|---|---|---|
| **创建** | `subos new foo` | `subos new foo` | `subos new foo` |
| **进入** | `subos use foo --global` | `subos use foo` | `subos use foo --sandbox` |
| **隔离级别** | PATH 优先级 | 子 shell + env | 文件系统视图 |
| **$HOME** | 宿主主目录 | 宿主主目录 | sandbox 私有 |
| **dotfile** | 共享宿主 | 共享宿主 | 完全独立 |
| **后端** | env | env spawn shell | bwrap / proot |
| **平台** | 全平台 | 全平台 | 仅 Linux |

## 使用场景

- **隔离构建环境**：编译项目时不污染宿主 dotfile 和缓存
- **跨发行版测试**：在不同 sandbox 中测试不同的工具链组合
- **清理实验**：尝试新工具后直接删除 sandbox，宿主一尘不染
- **AI Agent 操场**：给 LLM agent 一个干净的沙箱环境

## 后端

xlings sandbox 支持双后端，自动检测可用后端：

| 后端 | 说明 |
|------|------|
| **proot** | 无需特权，用户态文件系统重定向，零 sudo |
| **bwrap** (bubblewrap) | 基于 Linux namespace，更强的隔离性 |

xlings 会优先使用 bwrap（如果可用），否则自动回退到 proot。

## 删除 Sandbox

```bash
xlings subos remove mybox
```

删除 sandbox 会清除其私有的根目录，包括所有 dotfile。共享的包 payload 不受影响。
