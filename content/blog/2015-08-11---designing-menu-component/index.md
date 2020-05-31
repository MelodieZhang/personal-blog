---
title: Menu 组件设计记录
date: "2015-08-11 10:16"
---

今天在设计统一的知乎 Web 端 menu 的过程中，研究了下不同情况下的 menu 组件的最佳形式。

Menu 按有无分隔线可抽象为三类：

1. 每个 item 之间都有分隔线
2. 每个 item 之间都没有分隔线
3. item 有分组，不同的组之间用分隔线隔开

知乎的 Web 端恰好同时存在这三种情况，怎样设计 menu 才能兼顾？

Material Design 中对 menu 有这样一种参考规范：  
![image](http://i3.tietuku.com/f6e27e4816bb02a2.png)
![image](http://i3.tietuku.com/9bad2814a2099fcd.png)

每个 menu item 高度是固定的，item 与 menu 边界上下均设置固定的 padding，以使在没有分隔线的情况下，效果看起来最佳。可以想象，如果没有这个 padding，整个 menu 看起来会像是头部和尾部被削掉了一截。由于每个 item 的高度相同，hover 时的高亮效果也能保证高度一致。对于大多数情况，Google 给出的这套方案堪称完美的解决办法。

根据这套方案统一设计的 menus：
![image](http://i3.tietuku.com/909123379a50d139.png)

然而实际情况并不理想，原因有这两点：

1. 知乎的每个 menu 中 item 的个数少，但形式更多样；
2. 单独一个 item 被分隔线隔开的情况较多（分享、回答设置、问题设置），hover 后，这些 item 的上下 padding 会形成难看的间隙。

这里产生了一个矛盾：对于没有分隔线的 menu，上下的 padding 是不可或缺的；对于有分隔线的 menu，当有多个单独的 item 被隔离时，item 上下 的 padding 就显得多余，hover 高亮时就会产生间隙。

怎样才能在 hover 前后都达到最好的视觉效果呢？

![image](http://i3.tietuku.com/0bd510013965eb95.png)
![image](http://i3.tietuku.com/f80ec489ad9fed17.png)

A：按照 Material Design 的参考方案设计的回答设置 menu。在默认情况下表现效果最好，但 hover 高亮后的「缝隙」不理想。

B：去掉上下 padding。hover 高亮效果理想，item 视觉上过于拥挤。

C：去掉上下 padding，同时增大每个 item 的高度。效果理想。

当然，C 方案也并非是万全之策，在设计中还需作出妥协，如原来不含分隔线的 menu 现在必须加上分隔线，才能达成组件效果的统一。

最后，根据新的 C 方案设计的 menus：
![image](http://i3.tietuku.com/17e01fb7c42e8954.png)
