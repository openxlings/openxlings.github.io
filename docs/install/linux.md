---
sidebar_position: 1
title: Linux 安装
---

# Linux 安装指南

## 一键安装

推荐使用以下命令自动安装 xlings：

```bash
curl -fsSL https://raw.githubusercontent.com/openxlings/xlings/refs/heads/main/tools/other/quick_install.sh | bash
```

安装脚本会自动：
- 下载最新版本的 xlings 二进制
- 安装到 `~/.xlings/` 目录
- 配置 PATH 环境变量

安装完成后，重新打开终端或执行 `source ~/.bashrc`（或 `source ~/.zshrc`）即可使用。

## 验证安装

```bash
xlings --version
xlings config
```

## GitHub 镜像

如果 GitHub 访问受限，可以通过 `XLINGS_GITHUB_MIRROR` 指定镜像基址：

```bash
XLINGS_GITHUB_MIRROR=https://mirror.example.com \
  curl -fsSL https://mirror.example.com/openxlings/xlings/main/tools/other/quick_install.sh | bash
```

## 从源码构建

如果你想从源码构建 xlings：

```bash
# 1. 克隆仓库
git clone https://github.com/openxlings/xlings.git
cd xlings

# 2. 使用 xlings 安装构建依赖（需要先安装 xlings）
xlings install

# 3. 构建
xmake f -y
xmake build
```

构建依赖（会由 `xlings install` 自动安装）：
- xmake
- cmake
- ninja
- musl-gcc（静态链接编译）

## 支持的发行版

xlings 在以下发行版上测试通过：
- Ubuntu 20.04+
- Debian 11+
- Fedora 38+
- Arch Linux
- Alpine Linux

xlings 采用静态链接编译，理论上支持所有 x86_64 Linux 发行版。

## 卸载

```bash
xlings self uninstall
```

如果要保留已下载的包 payload 以便后续重装复用：

```bash
xlings self uninstall --keep-data
```
