## robots
robots.txt 是一个用于控制搜索引擎爬虫访问网站行为的文本文件。obots.txt 是一个重要的SEO工具，正确使用可以帮助优化网站的搜索引擎抓取策略，提高网站的SEO效果。
1. 基本语法
User-agent: [爬虫名称]
Disallow: [禁止访问的路径]
Allow: [允许访问的路径]

2. 常见配置
```txt
# 允许所有爬虫访问所有内容
User-agent: *
Allow: /

# 禁止所有爬虫访问所有内容
User-agent: *
Disallow: /

# 禁止特定爬虫访问
User-agent: Googlebot
Disallow: /private/
Allow: /public/

# 多个规则组合
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /public/
```

3. 特定目录配置
```txt
# 禁止访问特定文件类型
User-agent: *
Disallow: /*.pdf$
Disallow: /*.doc$

# 禁止访问特定目录
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/

# 允许访问特定子目录
User-agent: *
Disallow: /private/
Allow: /private/public/
```

4. 针对不同搜索引擎
```txt
# Google爬虫
User-agent: Googlebot
Disallow: /nogoogle/

# Bing爬虫
User-agent: Bingbot
Disallow: /nobing/

# 百度爬虫
User-agent: Baiduspider
Disallow: /nobaidu/
```
5. 爬虫抓取频率控制
```txt
# 设置爬虫抓取延迟（非所有爬虫都支持）
User-agent: *
Crawl-delay: 10

# 设置站点地图位置
Sitemap: https://example.com/sitemap.xml
```
robots.txt 必须放在网站根目录,文件名必须是 robots.txt内容必须是纯文本,规则自上而下匹配,大小写敏感
# 网站域名示例
https://www.google.com/robots.txt