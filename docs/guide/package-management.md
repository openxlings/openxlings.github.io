---
sidebar_position: 1
title: 包管理
---

# 包管理

xlings 内置包管理器 xim（Xlings Installation Manager），支持软件安装、环境配置、教程安装等多种包类型。

## 安装软件

```bash
# 安装最新版本
xlings install gcc
xlings install node

# 安装指定版本
xlings install gcc@15
xlings install node@24

# 一次安装多个包
xlings install gcc@15 node@24 pnpm

# 跳过确认提示
xlings install gcc@15 -y
```

## 安装环境配置

xlings 不仅能安装软件，还能一键配置开发环境：

```bash
# 配置 Rust crates 镜像
xlings install config:rust-crates-mirror
```

## 安装教程

```bash
# 安装交互式 C++ 教程
xlings install d2x:mcpp-standard
```

## 卸载软件

```bash
xlings remove gcc
xlings remove node
```

## 搜索软件

```bash
xlings search gcc
xlings search node
```

搜索结果会显示包名、描述、可用版本等信息。

## 列出已安装的包

```bash
# 列出所有已安装的包
xlings list

# 过滤显示
xlings list gcc
```

## 查看包信息

```bash
xlings info gcc
```

显示包的详细信息，包括描述、可用版本、依赖关系、支持平台等。

## 更新包索引

```bash
xlings update
```

从远程同步最新的包索引数据。建议在搜索或安装之前先更新索引。

## 项目级依赖管理

在项目根目录创建 `.xlings.json` 文件，声明项目所需的工具和版本：

```json
{
  "workspace": {
    "xmake": "3.0.7",
    "cmake": "4.0.2",
    "ninja": "1.12.1",
    "gcc": { "linux": "15.1.0" },
    "llvm": { "macos": "20" }
  }
}
```

然后一条命令安装所有依赖：

```bash
xlings install
```

`workspace` 中的值可以是版本字符串，也可以是按平台区分的对象（`linux`、`macos`、`windows`），实现跨平台项目配置。

## 包索引

xlings 的包来自 [xim-pkgindex](https://github.com/openxlings/xim-pkgindex) 索引仓库。你也可以添加自定义索引仓库来扩展可用包集合。
