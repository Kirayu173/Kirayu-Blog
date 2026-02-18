---
title: Mizuki 使用简明指南
published: 2024-04-01
description: 快速了解如何使用这个博客模板。
image: "./cover.webp"
tags: ["Mizuki", "博客", "自定义"]
category: 指南
draft: false
---

这个博客模板基于 [Astro](https://astro.build/) 构建。  
文中未覆盖的细节，可参考 [Astro 官方文档](https://docs.astro.build/)。

## 文章 Frontmatter

```yaml
---
title: 我的第一篇文章
published: 2023-09-09
description: 这是我的博客第一篇文章。
image: ./cover.jpg
tags: [示例, 前端]
category: 前端
draft: false
---
```

## 常见字段说明

| 字段 | 说明 |
|---|---|
| `title` | 文章标题 |
| `published` | 发布时间 |
| `pinned` | 是否置顶 |
| `priority` | 置顶优先级（值越小越靠前） |
| `description` | 文章摘要 |
| `image` | 封面图路径 |
| `tags` | 标签列表 |
| `category` | 分类名称 |
| `licenseName` | 许可证名称 |
| `author` | 作者名称 |
| `sourceLink` | 来源链接 |
| `draft` | 草稿状态 |

## 文章目录建议

文章建议放在 `src/content/posts/` 下，也可以按目录组织资源：

```text
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.webp
    └── index.md
```
