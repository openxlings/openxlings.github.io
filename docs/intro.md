---
sidebar_position: 1
title: 快速开始
---

# 快速开始

xlings 是一个高度抽象的包管理器——"多版本管理 + 万物皆可成包"。

## 安装 xlings

**Linux / macOS：**

```bash
curl -fsSL https://raw.githubusercontent.com/openxlings/xlings/refs/heads/main/tools/other/quick_install.sh | bash
```

**Windows (PowerShell)：**

```powershell
irm https://raw.githubusercontent.com/openxlings/xlings/refs/heads/main/tools/other/quick_install.ps1 | iex
```

安装完成后，重新打开终端即可使用 `xlings` 命令。

## 第一次安装软件

```bash
xlings install gcc@15
```

这条命令会自动下载并安装 GCC 15，包括依赖项解析、下载校验和版本注册。安装完成后可以直接使用：

```bash
gcc --version
# gcc (GCC) 15.1.0
```

## 基本用法

| 命令 | 说明 |
|------|------|
| `xlings install <pkg>` | 安装软件包 |
| `xlings install <pkg>@<ver>` | 安装指定版本 |
| `xlings remove <pkg>` | 卸载软件包 |
| `xlings search <keyword>` | 搜索软件包 |
| `xlings list` | 列出已安装的包 |
| `xlings use <pkg> <ver>` | 切换版本 |
| `xlings update` | 更新包索引 |
| `xlings info <pkg>` | 查看包信息 |

## 项目环境一键安装

在项目根目录创建 `.xlings.json`，然后运行 `xlings install` 即可一键安装所有依赖：

```json
{
  "workspace": {
    "xmake": "3.0.7",
    "gcc": { "linux": "15.1.0" },
    "llvm": { "macos": "20" }
  }
}
```

```bash
xlings install
```

## 下一步

- [Linux 安装详情](/docs/install/linux)
- [包管理指南](/docs/guide/package-management)
- [版本管理指南](/docs/guide/version-management)
- [SubOS 环境隔离](/docs/guide/subos)
