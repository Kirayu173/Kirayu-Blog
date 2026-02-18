---
title: Markdown 扩展能力演示
published: 2024-05-01
updated: 2024-11-29
description: 展示 Mizuki 中常用的 Markdown 扩展语法
image: ""
tags: [示例, Markdown, Mizuki]
category: "示例"
draft: false
---

## GitHub 仓库卡片

可以通过 `::github` 指令嵌入仓库信息卡片：

::github{repo="matsuzaka-yuki/Mizuki"}

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## Admonitions 提示块

支持 `note`、`tip`、`important`、`warning`、`caution` 等类型。

:::note
这里是普通提示信息。
:::

:::tip
这里是实用建议。
:::

:::important
这里是关键说明。
:::

:::warning
这里是风险提醒。
:::

:::caution
这里是操作后果说明。
:::

### 自定义标题

:::note[自定义标题]
你可以为提示块设置自定义标题。
:::

## GitHub 风格提示

> [!TIP]
> 也支持 GitHub 风格的提示语法。

```markdown
> [!NOTE]
> 这是一个说明提示。
```

## Spoiler 折叠文本

你可以使用 spoiler 语法隐藏部分内容：  
内容 :spoiler[这里被折叠了，点击可展开]。
