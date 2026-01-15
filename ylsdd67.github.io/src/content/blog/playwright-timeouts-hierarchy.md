---
title: "超时管理：Playwright 的 timeout 层级与建议默认值"
description: "把超时变成“可解释的配置”，而不是一堆魔法数字。"
pubDate: 2025-12-31
tags: ["playwright", "timeouts", "reliability"]
lang: zh
---

超时设置要有层级：

- 全局默认（避免每个用例都写）
- 单个测试/步骤（按业务复杂度调）
- 单个等待点（最少使用）

当 CI 变慢时，你能快速定位“哪一层”需要调整。
