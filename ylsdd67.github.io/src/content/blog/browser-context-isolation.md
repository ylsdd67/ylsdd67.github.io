---
title: "Browser Context 隔离：并行与稳定性的基础"
description: "每个测试一个 context，避免 cookie/localStorage 污染。"
pubDate: 2025-12-30
tags: ["playwright", "isolation", "parallel"]
lang: zh
---

共享状态是 flaky 的温床。

建议：

- 每个测试创建独立 context
- 认证用 storageState，但仍保持隔离
- 失败时保存 trace，快速确认是否状态污染

隔离做对了，并行才不会“越跑越不稳定”。
