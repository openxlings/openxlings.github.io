---
sidebar_position: 1
title: CLI 参考
---

# CLI 命令参考

## 包管理

### xlings install

安装软件包。

```bash
xlings install <pkg>              # 安装最新版本
xlings install <pkg>@<version>    # 安装指定版本
xlings install <pkg1> <pkg2>      # 安装多个包
xlings install <pkg> -y           # 跳过确认
xlings install                    # 读取 .xlings.json，安装项目依赖
```

**包名格式：**

| 格式 | 示例 | 说明 |
|------|------|------|
| `<name>` | `gcc` | 默认命名空间 |
| `<name>@<ver>` | `gcc@15` | 指定版本 |
| `config:<name>` | `config:rust-crates-mirror` | 配置包 |
| `d2x:<name>` | `d2x:mcpp-standard` | d2x 教程包 |

### xlings remove

卸载软件包。

```bash
xlings remove <pkg>
xlings remove <pkg>@<version>
```

### xlings search

搜索包索引。

```bash
xlings search <keyword>
```

### xlings list

列出已安装的包。

```bash
xlings list              # 列出所有
xlings list <filter>     # 按关键字过滤
```

### xlings info

查看包详细信息。

```bash
xlings info <pkg>
```

### xlings update

更新包索引。

```bash
xlings update
```

## 版本管理

### xlings use

切换工具版本。

```bash
xlings use <pkg> <version>    # 切换到指定版本
xlings use <pkg>              # 列出所有已注册版本
```

版本号支持模糊匹配：`15` 匹配 `15.1.0`，`14.2` 匹配 `14.2.0`。

## SubOS 管理

### xlings subos new

创建新的 subos 环境。

```bash
xlings subos new <name>
```

### xlings subos use

切换到指定 subos。

```bash
xlings subos use <name>                # shell-level 切换
xlings subos use <name> --global       # 全局切换
xlings subos use <name> --sandbox      # Linux sandbox 模式
xlings subos use <name> --sandbox bwrap
xlings subos use <name> --sandbox proot
```

### xlings subos list

列出所有 subos。

```bash
xlings subos list
xlings subos ls        # 短别名
```

### xlings subos info

查看 subos 详细信息。

```bash
xlings subos info <name>
xlings subos i <name>      # 短别名
```

### xlings subos remove

删除 subos。

```bash
xlings subos remove <name>
xlings subos rm <name>         # 短别名
```

## 系统管理

### xlings config

显示当前配置信息。

```bash
xlings config
```

### xlings self

xlings 自身管理。

```bash
xlings self init        # 初始化数据目录
xlings self install     # 安装 xlings 到用户目录
xlings self uninstall   # 卸载当前 xlings 安装
xlings self clean       # 清理缓存和无引用的 payload
xlings self doctor      # 检查 workspace / shim 一致性
```

### xlings interface

结构化 JSON 接口，供 AI Agent 和自动化工具调用。

```bash
xlings interface --version       # 查询接口版本
```

## 通用选项

| 选项 | 说明 |
|------|------|
| `--version` | 显示 xlings 版本 |
| `-h`, `--help` | 显示帮助信息 |
| `-y` | 跳过确认提示 |
