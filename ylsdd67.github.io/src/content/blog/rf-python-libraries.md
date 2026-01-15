---
title: "Robot Framework + Python Library：何时该写自定义库"
description: "当关键字复杂度上升时，用 Python 把复杂度收敛起来。"
pubDate: 2026-01-01
tags: ["robotframework", "python", "libraries"]
lang: zh
---

当你开始遇到这些信号：

- 关键字需要复杂数据结构
- 重复逻辑越来越多
- 性能或稳定性受到限制

就可以把核心逻辑下沉到 Python Library，再用 RF 作为编排层。
