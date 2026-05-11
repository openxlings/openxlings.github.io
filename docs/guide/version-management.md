---
sidebar_position: 2
title: 版本管理
---

# 版本管理

xlings 内置版本管理器 xvm（Xlings Version Manager），支持多版本共存和自由切换。通过 shim 机制实现零开销版本分发。

## 安装多个版本

```bash
xlings install gcc@15
xlings install gcc@13
xlings install node@24
xlings install node@22
```

安装后，版本信息自动注册到版本数据库。

## 切换版本

```bash
# 切换 gcc 到 15.x
xlings use gcc 15

# 精确匹配版本号
xlings use gcc 14.2

# 切换 node 版本
xlings use node 22
```

`use` 命令支持模糊匹配：`15` 会匹配到 `15.1.0`，`14.2` 会匹配到 `14.2.0`。

## 查看已安装版本

```bash
# 查看 gcc 的所有已注册版本（不带版本号时列出所有版本）
xlings use gcc

# 查看包详细信息
xlings info gcc
```

## Shim 机制

版本切换后，xlings 在 subos 的 `bin/` 目录下创建 shim。当你执行 `gcc` 时，shim 会：

1. 检测 `argv[0]` 提取程序名
2. 读取 effective workspace（项目配置 > subos 配置 > 全局配置）
3. 模糊匹配版本号
4. 执行对应版本的真实程序

```bash
gcc --version       # shim 自动路由到当前激活版本
g++ -o main main.cpp  # 同理，g++ 也通过 shim 分发
```

## 配置层级

版本解析遵循以下优先级：

```
项目配置 (.xlings.json) > 当前 subos 配置 > 全局配置
```

| 配置文件 | 作用域 |
|----------|--------|
| `<project>/.xlings.json` | 项目级：仅在该目录下生效 |
| `~/.xlings/subos/<name>/.xlings.json` | SubOS 级：当前 subos 的版本视图 |
| `~/.xlings/.xlings.json` | 全局级：默认配置 |

## 项目级版本锁定

在项目目录创建 `.xlings.json`，可以锁定项目使用的工具版本：

```json
{
  "workspace": {
    "gcc": "14.2.0"
  }
}
```

在此目录下执行 `gcc` 时，shim 会自动使用 14.2.0 版本，不影响全局设置。
