---
title: "Retry 要有纪律：什么该重跑，什么不该"
description: "重跑不是修复；用策略把重跑成本可视化。"
pubDate: 2026-01-05
tags: ["flaky", "ci", "strategy"]
lang: zh
---

我支持有限度的 retry，但前提是：

- 只对已知 flaky 的用例启用
- 统计与告警到团队（否则会被忽略）
- 设定“治理期限”，到期必须修复或下线

否则 retry 只会掩盖系统性问题。
