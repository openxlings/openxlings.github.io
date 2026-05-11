---
sidebar_position: 2
title: XPackage 规范
---

# XPackage 规范参考

本文档描述 xpkg 包定义文件的完整规范（spec 版本 1）。

## package 表

每个 xpkg 文件必须定义一个 `package` 全局表：

```lua
package = {
    spec = "1",
    -- ...字段定义
}
```

### 必填字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `spec` | string | 规范版本，当前为 `"1"` |
| `name` | string | 包名，全小写，与文件名一致 |
| `description` | string | 简短描述 |
| `type` | string | 包类型：`"package"` / `"config"` / `"pkgindex"` |
| `xpm` | table | 版本定义表 |

### 可选字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `authors` | string[] | 作者列表 |
| `licenses` | string[] | 许可证列表 |
| `repo` | string | 源代码仓库 URL |
| `docs` | string | 文档 URL |
| `archs` | string[] | 支持的架构，如 `{"x86_64"}` |
| `status` | string | 状态：`"dev"` / `"stable"` / `"deprecated"` |
| `categories` | string[] | 分类标签 |
| `keywords` | string[] | 搜索关键词 |
| `programs` | string[] | 提供的可执行文件名 |
| `xvm_enable` | boolean | 是否启用多版本管理 |

## xpm 表

`xpm` 定义包在各平台上的可用版本和下载来源：

```lua
xpm = {
    linux = {
        deps = { "xim:glibc@2.39", "xim:binutils@2.42" },
        ["latest"] = { ref = "15.1.0" },
        ["15.1.0"] = "XLINGS_RES",
        ["13.3.0"] = "https://example.com/pkg-13.3.0.tar.xz",
    },
    windows = {
        ["latest"] = { ref = "15.1.0" },
        ["15.1.0"] = {},
    },
    macos = {
        ["latest"] = { ref = "15.1.0" },
        ["15.1.0"] = "https://example.com/pkg-15.1.0-macos.tar.xz",
    },
}
```

### 平台键

| 键 | 说明 |
|----|------|
| `linux` | Linux (所有发行版) |
| `windows` | Windows |
| `macos` | macOS |

### deps 依赖声明

```lua
deps = { "xim:glibc@2.39", "xim:binutils@2.42" },
```

格式为 `"<namespace>:<name>@<version>"`。安装时 xlings 会自动解析依赖图并按顺序安装。

### 版本值类型

| 值 | 说明 |
|----|------|
| `"https://..."` | 直接下载 URL |
| `"XLINGS_RES"` | 从 xlings 官方资源站自动解析下载地址 |
| `{}` | 空表，表示该版本由其他方式提供 |
| `{ ref = "x.y.z" }` | 别名，指向实际版本（用于 `latest` 等） |

## Hook 函数

| 函数 | 返回值 | 说明 |
|------|--------|------|
| `installed()` | boolean | 检查是否已安装 |
| `install()` | boolean | 执行安装操作 |
| `config()` | boolean | 安装后配置 |
| `uninstall()` | boolean | 卸载清理 |

### 执行顺序

安装时：`installed()` -> 若返回 false -> `install()` -> `config()`

卸载时：`uninstall()`

## 可用库

在 hook 函数中可以使用以下库：

```lua
import("xim.libxpkg.xvm")         -- 版本管理
import("xim.libxpkg.system")      -- 系统操作
import("xim.libxpkg.log")         -- 日志输出
import("xim.libxpkg.pkginfo")     -- 包信息查询
import("xim.libxpkg.pkgmanager")  -- 包管理操作
```

## 内置变量

在 hook 函数执行时，以下变量自动可用：

| 变量 | 说明 |
|------|------|
| `package.name` | 包名 |
| `package.version` | 当前安装的版本 |
| `package.install_dir` | 安装目标目录 |
| `package.repo` | 仓库 URL |

## 完整示例

参考 xim-pkgindex 中的真实包定义：[github.com/openxlings/xim-pkgindex/pkgs](https://github.com/openxlings/xim-pkgindex/tree/main/pkgs)
