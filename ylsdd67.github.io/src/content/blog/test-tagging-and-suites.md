---
title: "测试标签与分层套件：让 CI 更快更稳"
description: "用 tags 切分 smoke / regression / nightly，避免“一锅端”。"
pubDate: 2026-01-04
tags: ["testing", "ci", "tags"]
lang: zh
---

如果所有测试都在同一条流水线跑完，CI 会越来越慢。

我一般会：

- `smoke`：关键路径，PR 必跑
- `regression`：合并到主干后跑
- `nightly`：长耗时或依赖外部资源

合理分层能显著改善反馈速度。
