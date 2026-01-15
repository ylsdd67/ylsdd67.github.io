---
title: "测试金字塔不是口号：怎么落到 CI 里"
description: "UI E2E 要少而精，把更多覆盖下沉到更快的层。"
pubDate: 2025-12-23
tags: ["testing", "strategy", "ci"]
lang: zh
---

落地时我会关心两个指标：

- PR 的反馈时间（越短越好）
- 失败定位成本（越低越好）

这通常意味着：单测/契约/集成更多，E2E 更少但更关键。
