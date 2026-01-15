---
title: "选择器策略：优先 ARIA，其次 data-testid"
description: "可维护选择器的核心是“语义稳定”，而不是 CSS 复杂。"
pubDate: 2026-01-07
tags: ["playwright", "selectors", "a11y"]
lang: zh
---

选择器写得“聪明”不等于稳定。

推荐顺序：

- `getByRole` / `getByLabel`（语义 + 可访问性）
- `data-testid`（测试专用）
- 最后才是 CSS/XPath（容易受 UI 改动影响）

顺便：写好 ARIA，本身也能提升产品质量。
