---
title: "Playwright 等待策略：别再 sleep() 了"
description: "用 locator.waitFor / expect / network 等待，把 flaky 降到可控范围。"
pubDate: 2026-01-15
tags: ["playwright", "reliability", "waits"]
lang: zh
---

很多不稳定测试并不是“环境差”，而是等待策略不明确。

我常用的三条原则：

- 等 DOM 的“状态”，不要等时间
- 优先用 `expect(...)` 等待可见/可交互/文本
- 必要时等待网络请求（或关键 API 响应）

后续会补一个最小可复用的等待工具箱。
