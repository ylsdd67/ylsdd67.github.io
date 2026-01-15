---
title: "要不要用 Page Object：我更偏向 Component Model"
description: "Page Object 不是银弹，组件化更贴近现代前端。"
pubDate: 2026-01-11
tags: ["playwright", "design", "pageobject"]
lang: zh
---

Page Object 的问题通常不是“用了就错”，而是边界不清。

我更喜欢：

- 以组件为单位组织（导航、表格、弹窗）
- 用业务流组合组件
- 断言集中管理（避免到处散落）

这样更适合组件化 UI 和频繁迭代的产品。
