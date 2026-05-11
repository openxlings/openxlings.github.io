---
sidebar_position: 3
title: Windows 安装
---

# Windows 安装指南

## 一键安装

在 **PowerShell** 中执行：

```powershell
irm https://raw.githubusercontent.com/openxlings/xlings/refs/heads/main/tools/other/quick_install.ps1 | iex
```

安装完成后，重新打开终端即可使用 `xlings` 命令。

## 验证安装

```powershell
xlings --version
xlings config
```

## 备用安装方式

```powershell
$env:XLINGS_GITHUB_MIRROR = "https://mirror.example.com"
powershell -ExecutionPolicy Bypass -c "irm https://mirror.example.com/openxlings/xlings/main/tools/other/quick_install.ps1 | iex"
```

## 注意事项

- 需要 Windows 10 或更高版本
- 请使用 PowerShell 5.1+ 或 PowerShell Core 7+
- 部分包（如 gcc）在 Windows 上通过 MinGW-w64 提供
- SubOS sandbox 模式仅限 Linux，Windows 上不可用

## 卸载

```powershell
xlings self uninstall
```

如果要保留已下载的包 payload 以便后续重装复用：

```powershell
xlings self uninstall --keep-data
```
