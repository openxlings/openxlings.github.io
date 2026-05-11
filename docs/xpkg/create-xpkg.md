---
sidebar_position: 1
title: 创建 XPackage
---

# 创建 XPackage

XPackage（xpkg）是 xlings 的包定义格式。每个 xpkg 是一个 Lua 文件，定义了包的元信息、版本列表和安装/配置/卸载逻辑。

## 基本结构

一个最小的 xpkg 文件：

```lua
package = {
    spec = "1",

    -- 基本信息
    name = "myapp",
    description = "My awesome application",
    authors = {"Your Name"},
    licenses = {"MIT"},
    repo = "https://github.com/you/myapp",

    -- 包类型
    type = "package",
    archs = { "x86_64" },
    status = "stable",  -- dev, stable, deprecated
    categories = { "tool" },
    keywords = { "myapp", "tool" },

    -- 提供的可执行文件
    programs = { "myapp" },

    -- 启用多版本管理
    xvm_enable = true,

    -- 版本定义（按平台）
    xpm = {
        linux = {
            ["latest"] = { ref = "1.0.0" },
            ["1.0.0"] = "https://example.com/myapp-1.0.0-linux-x86_64.tar.gz",
        },
        windows = {
            ["latest"] = { ref = "1.0.0" },
            ["1.0.0"] = "https://example.com/myapp-1.0.0-windows-x86_64.zip",
        },
    },
}

-- 导入 xpkg 库
import("xim.libxpkg.log")
import("xim.libxpkg.system")
import("xim.libxpkg.xvm")

-- 检查是否已安装
function installed()
    return xvm.has(package.name)
end

-- 安装逻辑
function install()
    -- package.install_dir 是 xlings 自动设置的安装目录
    log.info("installing %s to %s", package.name, package.install_dir)
    -- 解压下载的文件（xlings 自动下载到 package.install_dir）
    return true
end

-- 安装后配置（注册版本、创建 shim 等）
function config()
    xvm.add(package.name)
    return true
end

-- 卸载逻辑
function uninstall()
    xvm.remove(package.name)
    return true
end
```

## Hook 函数

xpkg 支持以下 hook 函数：

| Hook | 调用时机 | 说明 |
|------|----------|------|
| `installed()` | 安装前 | 检查是否已安装，返回 `true` 则跳过安装 |
| `install()` | 下载完成后 | 执行安装操作（解压、编译等） |
| `config()` | 安装完成后 | 配置环境（注册版本、设置 PATH 等） |
| `uninstall()` | 卸载时 | 清理安装的文件和配置 |

## 常用 API

### xvm（版本管理）

```lua
import("xim.libxpkg.xvm")

xvm.has("gcc")           -- 检查是否已注册
xvm.add("gcc")           -- 注册当前版本
xvm.remove("gcc")        -- 移除版本注册
```

### system（系统操作）

```lua
import("xim.libxpkg.system")

system.exec("make install")       -- 执行命令
system.xpkgdir()                  -- 获取 xpkg 数据目录
```

### log（日志）

```lua
import("xim.libxpkg.log")

log.info("message: %s", value)
log.warn("warning: %s", value)
```

## 包类型

| type 值 | 说明 |
|---------|------|
| `"package"` | 普通软件包 |
| `"config"` | 环境配置包（如镜像配置） |
| `"pkgindex"` | 包索引仓库 |

## 版本来源

`xpm` 中版本的值可以是：

- **URL 字符串**：直接下载地址
- **`"XLINGS_RES"`**：从 xlings 官方资源站下载
- **对象 `{}`**：空对象，表示该版本可用但无需下载（如系统自带）
- **`{ ref = "x.y.z" }`**：`latest` 等别名指向的实际版本

## 提交到包索引

创建好 xpkg 后，可以提交到 [xim-pkgindex](https://github.com/openxlings/xim-pkgindex) 仓库：

1. Fork `xim-pkgindex` 仓库
2. 将 Lua 文件放到 `pkgs/<首字母>/` 目录下（如 `pkgs/m/myapp.lua`）
3. 提交 Pull Request
