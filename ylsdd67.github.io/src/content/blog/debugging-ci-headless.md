---
title: "CI Headless 调试：从“难复现”到“可复盘”"
description: "一套固定的调试输出，让失败变得可解释。"
pubDate: 2025-12-25
tags: ["ci", "debugging", "playwright"]
lang: zh
---

建议 CI 默认输出一套“复盘材料”：

- trace + 失败截图
- console 日志
- 关键 API 的请求摘要

这样即使你本地无法复现，也能在证据里找到线索。
