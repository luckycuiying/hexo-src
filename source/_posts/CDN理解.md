---
layout: cdn
title: CDN的理解
date: 2017-08-27 09:45:37
tags:  计算机基础知识
---
####  CDN 的含义：
内容分发网络和内容交付网络
CDN的意图就是尽可能的减少资源在转发、传输、链路抖动等情况下顺利保障信息的连贯性。
CDN就是扮演者护航者和加速者的角色，更快准狠的触发信息和触达每一个用户，带来更为极致的使用体验。
其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。类似分布各地的物流仓储网络，CDN网络可以将源站的内容缓存到分布全球的CDN节点，根据用户的访问IP，就近连接CDN，提高网站响应速度。
#### CDN 于前端优化的方案
1，域名分片
域名分片(Domain Sharding)技术可以突破浏览器对单一域名的最大连接数限制，有效的提高浏览器HTTP并发请求数。
2. 插件加速
第三方插件严重拖慢了网页显示？插件加速引擎能够异步或延时加载异常的插件,提高用户体验。
3. 异步加载
异步加载非必要的页面资源，加快首屏显示时间，提高用户体验。
4. 资源内置 智能分析外链式JS和CSS资源的内容，将适合的资源嵌入到HTML页面中，减少访问时的请求数。
5. 带宽压缩我们会帮您自动压缩传输的流量，为您节省带宽。
6. 代码压缩去除HTML，JS，CSS内容中的非必须内容，减少资源大小，提高页面的加载速度。
7. DataURI智能引擎帮助页面内的静态资源URL自动改写到融合CDN网络，无需考虑动静分离即可享受实时加速和优化服务。







