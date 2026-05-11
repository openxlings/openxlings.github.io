---
sidebar_position: 100
title: 常见问题
---

# 常见问题

## 安装相关

### 安装命令执行后没有反应？

请确保网络可以正常访问 GitHub。如果访问受限，可以通过 `XLINGS_GITHUB_MIRROR` 指定镜像：

```bash
XLINGS_GITHUB_MIRROR=https://mirror.example.com \
  curl -fsSL https://mirror.example.com/openxlings/xlings/main/tools/other/quick_install.sh | bash
```

Windows PowerShell：

```powershell
$env:XLINGS_GITHUB_MIRROR = "https://mirror.example.com"
powershell -ExecutionPolicy Bypass -c "irm https://mirror.example.com/openxlings/xlings/main/tools/other/quick_install.ps1 | iex"
```

### 安装后命令找不到？

安装完成后需要重新打开终端，或手动加载 shell 配置：

```bash
source ~/.bashrc    # bash
source ~/.zshrc     # zsh
```

### 如何更新 xlings 本身？

```bash
# 重新运行安装命令即可更新到最新版本
curl -fsSL https://raw.githubusercontent.com/openxlings/xlings/refs/heads/main/tools/other/quick_install.sh | bash
```

## 包管理

### 搜索不到想要的包？

先更新包索引：

```bash
xlings update
```

如果仍然找不到，说明该软件尚未收录到 xim-pkgindex。欢迎通过 [Pull Request](https://github.com/openxlings/xim-pkgindex) 添加新包。

### 安装包时下载太慢？

可以配置镜像源。在 `.xlings.json` 中设置：

```json
{
  "mirror": "CN"
}
```

### 如何同时安装多个版本？

直接安装不同版本即可，xlings 支持多版本共存：

```bash
xlings install gcc@15
xlings install gcc@13
```

然后用 `xlings use` 切换：

```bash
xlings use gcc 15
xlings use gcc 13
```

## SubOS

### subos 之间的包会重复下载吗？

不会。所有 subos 共享同一份包 payload，通过引用计数管理生命周期。只有最后一个引用被移除时才会清理 payload。

### 删除 subos 后磁盘空间没有释放？

删除 subos 只移除该 subos 的版本视图和配置。如果其他 subos 仍在使用相同的包，payload 不会被删除。可以用以下命令清理无引用的 payload：

```bash
xlings self clean
```

### shell-level 和 global 模式有什么区别？

- **shell-level**（默认）：启动一个子 shell，退出后回到原环境
- **global**（`--global`）：修改全局指针，影响所有新打开的终端

推荐日常使用 shell-level 模式，避免意外影响全局环境。

## Sandbox

### Sandbox 和普通 subos 有什么区别？

普通 subos 只隔离 PATH 和环境变量，共享宿主的 `$HOME` 和 dotfile。Sandbox 通过 proot/bwrap 实现文件系统级隔离，拥有独立的 `$HOME`、dotfile 和 `/etc`。

### 为什么 Sandbox 只支持 Linux？

Sandbox 依赖 Linux 特有的 proot 或 bubblewrap (bwrap) 工具来实现文件系统视图重定向。macOS 和 Windows 没有等效机制。

## 其他

### xlings 和 Homebrew / apt / pacman 有什么不同？

xlings 的核心区别在于：

1. **多版本管理**：原生支持同一工具的多版本共存和切换
2. **跨平台**：同一套命令在 Linux、macOS、Windows 上通用
3. **环境隔离**：SubOS 机制提供工作空间级别的隔离
4. **万物皆可包**：不仅安装软件，还能安装配置、教程等

### 如何参与贡献？

- [添加新包](https://github.com/openxlings/xim-pkgindex)
- [报告问题](https://github.com/openxlings/xlings/issues)
- [社区论坛](https://forum.d2learn.org/category/9/xlings)
