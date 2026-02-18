---
title: Markdown 入门教程
published: 2025-01-20
pinned: true
description: 一篇中文示例，快速掌握 Markdown 常用语法。
tags: [Markdown, 博客]
category: 示例
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 入门教程

本文是一个简化的中文示例，用来快速回顾 Markdown 的常用语法。

## 1. 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

## 2. 段落与换行

普通文本会自动组成段落。  
行尾加两个空格可以换行。

## 3. 强调

```markdown
**加粗**
*斜体*
~~删除线~~
```

## 4. 列表

### 无序列表

```markdown
- 苹果
- 香蕉
- 橙子
```

### 有序列表

```markdown
1. 第一步
2. 第二步
3. 第三步
```

## 5. 引用

```markdown
> 这是一段引用文本
```

> 这是一段引用文本

## 6. 代码

行内代码：`const x = 1`

代码块：

```ts
function greet(name: string) {
	return `你好，${name}`;
}
```

## 7. 链接与图片

```markdown
[Astro 官网](https://astro.build/)
![示例图片](./cover.webp)
```

## 8. 表格

```markdown
| 功能 | 说明 |
|---|---|
| 标题 | 使用 # |
| 列表 | 使用 - 或 1. |
| 代码 | 使用 ` 或 ``` |
```

| 功能 | 说明 |
|---|---|
| 标题 | 使用 `#` |
| 列表 | 使用 `-` 或 `1.` |
| 代码 | 使用 `` ` `` 或代码块 |

## 9. 分割线

```markdown
---
```

---

掌握以上内容后，你已经可以完成大多数博客文章的编写。
