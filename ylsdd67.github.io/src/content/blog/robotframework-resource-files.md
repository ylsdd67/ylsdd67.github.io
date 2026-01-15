---
title: "Robot Framework 的资源文件：怎么拆才不会碎"
description: "资源文件是复用的基础，但拆分要遵循边界。"
pubDate: 2026-01-02
tags: ["robotframework", "resources", "structure"]
lang: zh
---

资源文件拆分建议：

- 按“领域/模块”拆，而不是按“类型”拆
- 将低层关键字与业务流分开
- 变量集中管理，避免散落

最终目标：改动只影响局部，而不是全仓库联动。
