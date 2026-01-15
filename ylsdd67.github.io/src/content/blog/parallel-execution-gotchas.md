---
title: "并行执行的坑：为什么你一开 workers 就全红"
description: "并行不是开关，是一套隔离与资源治理策略。"
pubDate: 2026-01-08
tags: ["ci", "parallel", "reliability"]
lang: zh
---

并行后常见问题：

- 共享账号被挤下线
- 共享数据被互相覆盖
- 依赖服务被压垮（限流/超时）

解决方向：隔离（账号/数据/环境）+ 限流（workers）+ 观测（日志/trace）。
