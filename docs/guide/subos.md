---
sidebar_position: 3
title: SubOS 环境隔离
---

# SubOS 环境隔离

SubOS 是 xlings 的环境隔离机制，允许你创建多个独立的工作空间。每个 subos 维护自己的版本视图，而底层的包 payload 在所有 subos 之间共享复用，避免重复下载。

## 创建 SubOS

```bash
xlings subos new dev
xlings subos new test
```

## 列出所有 SubOS

```bash
xlings subos list
# 或使用短别名
xlings subos ls
```

## 切换 SubOS

```bash
# shell-level 切换（spawn 子 shell，退出后回到原环境）
xlings subos use dev

# global 切换（修改全局指针，影响所有新终端）
xlings subos use dev --global
```

shell-level 模式下，会启动一个新的子 shell 并设置 `XLINGS_ACTIVE_SUBOS` 环境变量。退出子 shell（`exit` 或 `Ctrl+D`）即可回到原环境。

## 在 SubOS 中安装软件

```bash
# 切换到 dev 环境
xlings subos use dev

# 在 dev 中安装 node（不影响其他 subos）
xlings install node@24 -y
node --version

# 退出 dev
exit

# 回到 default，node 不可见
```

## 查看 SubOS 信息

```bash
xlings subos info dev
# 或短别名
xlings subos i dev
```

## 删除 SubOS

```bash
xlings subos remove dev
# 或短别名
xlings subos rm dev
```

删除 subos 不会删除已下载的包 payload（其他 subos 可能还在使用）。xlings 使用引用计数机制，只有当最后一个引用被移除时才会清理 payload。

## 项目级隔离

在项目目录创建 `.xlings.json`，可以定义项目专属的工具版本：

```json
{
  "workspace": {
    "xmake": "3.0.7",
    "gcc": { "linux": "15.1.0" },
    "llvm": { "macos": "20" }
  }
}
```

在项目目录下执行 `xlings install` 即可一键安装项目所需的全部工具。项目配置的优先级高于 subos 配置。

## 版本视图

每个 subos 维护独立的版本视图：

```bash
xlings subos new dev
xlings subos use dev
xlings use gcc 14            # 仅影响 dev 的版本视图

xlings subos use default     # 切回默认，gcc 版本不变
```

这意味着你可以在不同 subos 中使用不同版本的同一工具，互不干扰。
