---
title: "测试数据策略：Fixtures、种子数据与可回滚方案"
description: "数据可控，测试才可控：减少“偶发”与“相互影响”。"
pubDate: 2026-01-12
tags: ["testing", "data", "fixtures"]
lang: zh
---

稳定的自动化离不开稳定的数据。

常见方案：

- 通过 API 创建独立数据（最推荐）
- DB 种子数据 + teardown 回滚
- 使用隔离的测试租户/命名空间

关键是：每条用例都能独立运行与清理。
