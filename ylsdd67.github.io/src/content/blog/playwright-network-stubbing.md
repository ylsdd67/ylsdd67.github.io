---
title: "Playwright 网络拦截与 Mock：什么时候该用？"
description: "用 route.fulfill 做可控的“准单元测试”，但别把它当真实世界。"
pubDate: 2026-01-10
tags: ["playwright", "network", "mock"]
lang: zh
---

网络 Mock 能让测试更快、更稳定，但也会降低真实性。

我一般把它用于：

- 复现边界条件（慢响应、错误码）
- 隔离第三方依赖（支付、短信）
- 验证前端渲染逻辑

关键路径仍然要保留一部分端到端真链路。
