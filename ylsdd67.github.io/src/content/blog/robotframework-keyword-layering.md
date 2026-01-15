---
title: "Robot Framework 关键字分层：让用例像规格说明书"
description: "把 UI 操作、业务流程、断言策略分离，提升可维护性。"
pubDate: 2026-01-14
tags: ["robotframework", "architecture", "keywords"]
lang: zh
---

关键字写到后面很容易变成“脚本堆”。

建议至少三层：

- **Page / Component**：低层 UI 操作
- **Flow / Use Case**：业务流程
- **Assert / Oracle**：断言与验证逻辑

分层以后，改 UI 选择器时通常只动一层。
