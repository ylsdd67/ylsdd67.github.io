---
title: "用 Playwright 做 API 测试：什么时候合适"
description: "用 request 上手快，但要明确它在测试金字塔的位置。"
pubDate: 2025-12-28
tags: ["playwright", "api", "testing"]
lang: zh
---

Playwright 的 `request` 很适合：

- 创建/清理测试数据
- 做关键 API 的健康检查
- 验证权限边界与错误码

它不是替代契约测试或单元测试，而是补齐“工程效率”的一块。
