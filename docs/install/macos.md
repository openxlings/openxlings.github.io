---
sidebar_position: 2
title: macOS 安装
---

# macOS 安装指南

## 一键安装

```bash
curl -fsSL https://raw.githubusercontent.com/openxlings/xlings/refs/heads/main/tools/other/quick_install.sh | bash
```

安装完成后，重新打开终端即可使用 `xlings` 命令。

## 验证安装

```bash
xlings --version
xlings config
```

## GitHub 镜像

```bash
XLINGS_GITHUB_MIRROR=https://mirror.example.com \
  curl -fsSL https://mirror.example.com/openxlings/xlings/main/tools/other/quick_install.sh | bash
```

## 注意事项

- 支持 macOS 12 (Monterey) 及以上版本
- 在 macOS 上，SubOS sandbox 模式不可用，仅 Linux 支持
- 部分 xpkg 可能仅提供 Linux 或 Windows 二进制，请查看包索引了解平台支持情况

## 卸载

```bash
xlings self uninstall
```

如果要保留已下载的包 payload 以便后续重装复用：

```bash
xlings self uninstall --keep-data
```
