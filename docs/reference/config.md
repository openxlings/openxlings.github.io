---
sidebar_position: 2
title: 配置参考
---

# .xlings.json 配置参考

`.xlings.json` 是 xlings 的配置文件，用于项目级依赖声明和全局配置。

## 项目配置

在项目根目录创建 `.xlings.json`，声明项目所需的工具和版本：

```json
{
  "workspace": {
    "xmake": "3.0.7",
    "cmake": "4.0.2",
    "gcc": { "linux": "15.1.0" },
    "llvm": { "macos": "20" }
  }
}
```

执行 `xlings install` 时，xlings 会读取此文件并安装所有声明的工具。

## 字段说明

### workspace

定义项目所需的工具及版本。

| 值类型 | 示例 | 说明 |
|--------|------|------|
| 版本字符串 | `"3.0.7"` | 所有平台使用相同版本 |
| 平台对象 | `{ "linux": "15.1.0" }` | 按平台指定不同版本 |

**平台键：**

| 键 | 平台 |
|----|------|
| `linux` | Linux |
| `macos` / `macosx` | macOS |
| `windows` | Windows |

### projectScope

```json
{
  "projectScope": false
}
```

控制当前 `.xlings.json` 是否启用项目作用域。默认启用；设置为 `false` 时，`xlings install` 仍可读取 `workspace` 安装依赖，但不会把当前目录当成项目 subos。

### mirror

```json
{
  "mirror": "GLOBAL"
}
```

包索引镜像选择。可选值：`"GLOBAL"`、`"CN"` 等。

## 全局配置文件

xlings 的全局配置位于 `~/.xlings/.xlings.json`，包含以下内容：

```json
{
  "versions": { },
  "lang": "zh",
  "mirror": "GLOBAL",
  "activeSubos": "default"
}
```

| 字段 | 说明 |
|------|------|
| `versions` | 已安装的包版本注册表 |
| `lang` | 界面语言 |
| `mirror` | 默认镜像 |
| `activeSubos` | 当前激活的 subos 名称 |

## SubOS 配置

每个 subos 在 `~/.xlings/subos/<name>/.xlings.json` 中维护自己的配置：

```json
{
  "workspace": {
    "gcc": "15.1.0",
    "node": "24.0.0"
  },
  "installed": ["gcc", "node"]
}
```

Sandbox 不是单独的 subos 配置类型，而是 `xlings subos use <name> --sandbox` 的进入方式。首次进入时，xlings 会在该 subos 下初始化私有的 `home/`、`tmp/` 和 `etc/` 目录。

## 配置优先级

```
项目 .xlings.json > 当前 subos 配置 > 全局配置 > 默认值
```

在项目目录下运行的命令会优先使用项目配置中声明的版本。
