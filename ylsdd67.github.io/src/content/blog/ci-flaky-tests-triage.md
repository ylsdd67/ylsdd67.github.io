---
title: "CI 上 flaky tests 的快速分诊流程"
description: "先分类、再定位、最后治理：别一上来就加 retry。"
pubDate: 2026-01-13
tags: ["ci", "flaky", "reliability"]
lang: zh
---

CI 上红灯最贵的是“打断节奏”。

我会先做分诊：

- 环境/依赖问题（服务不可用、网络抖动）
- 等待/同步问题（页面未稳定、请求未完成）
- 数据污染问题（共享账号、共享环境）

把问题归类后，修复路径会更清晰。
