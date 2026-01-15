---
title: "把 trace / video 当成第一手证据"
description: "CI 调试要快：trace、截图、网络日志要能一键拿到。"
pubDate: 2026-01-06
tags: ["playwright", "debugging", "ci"]
lang: zh
---

当你在 CI 上看到失败，最浪费时间的是“复现”。

建议默认产出：

- Playwright trace（必要时含 sources）
- 失败截图（以及关键步骤截图）
- video（只保留失败用例）

让问题定位从小时级降到分钟级。
