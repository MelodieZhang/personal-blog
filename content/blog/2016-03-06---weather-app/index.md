---
title: 写了一个单页天气 App
date: "2016-03-06 10:18"
---

![image](http://7xldlp.com1.z0.glb.clouddn.com/blog%2Fimage%2Ffirst-app-1.jpg)

iOS 开发初体验。试着用 Swift 写了一个简单的 Weather App，用到了一些轮子、踩到了一些坑，写这篇文字简要记录下实现过程、做过的尝试以及可以拿去用的经验。

#### 1. 构建界面

在 Storyboard 里拖拽控件，这个过程有些类似在 Sketch 里构建 UI。Auto layout 的那套东西我还没有理解透，以至于最后实现的布局上还是有些不明原由的问题，暂且不提。

值得一说的是，在 Storyboard 中图层的组织顺序和 Sketch 等设计软件是**正好相反**的。以天气 App 的界面为例，如果要把温度的 Label 置于天气图片之上，是需要在 Document Outline 里把 Temperature 置于 icon 之下的。

![image](http://7xldlp.com1.z0.glb.clouddn.com/blog%2Fimage%2Ffirst-app-2.png)

#### 2. 使用 CocoaPods 安装网络请求库

CocoaPods 是开发 OS X 和 iOS 应用程序的一个第三方库的依赖管理工具。利用它可以定义自己的依赖关系（称作 pods），使得在整个开发环境中对第三方库的版本管理非常方便。关于 CocoaPods 的安装和使用，可参考[官网](https://cocoapods.org)，不赘述。

我最开始使用的网络请求库是用 OC 语言写的 [AFNetworking](https://github.com/AFNetworking/AFNetworking)，因为我用到的开发语言是 Swift，所以需要额外做一些桥接工作。后来换成了用 Swift 写的的 [Alamofire](https://github.com/Alamofire/Alamofire)，不用进行 Bridge import。

#### 3. 使用 Core Location 获取当前的地理位置

主要用到 CLLocationManagerDelegate，在 info.plist 中设置 NSLocationUsageDescription 和 NSLocationAlwaysUsageDescription 值均为 「请允许我们使用位置信息」，这样，在应用启动时，会自动调用位置请求弹框，显示设置的文字请求使用位置信息。

#### 4. 使用 Alamofire 网络请求库获取到天气 API 的 JSON

仿照 Alamofire 的官方说明写即可，主要用到的代码：

```swift
Alamofire.request(.GET, url, parameters: ["lat":latitude, "lon":longtitude, "cnt":0, "appid": "yourappid"]).responseJSON { response in

        if let JSON = response.result.value {

            print("JSON: \(JSON)")

        }

    }
```

刚开始运行时遇到问题，无法打印，显示 Failure。把 print 都注释掉后，再运行，知道了错误原因，是因为 info.plist 中缺少一个设置：
将 App Transport Security Settings/Allow Arbitrary Loads 一项设置为 YES。终于可以打印出返回的 JSON 了。

另外，顺便学到了在浏览器里获取 JSON 的方法，以 open weather api 为例，如果要获取某个经纬度下的 JSON 格式数据，可在浏览器地址栏里输入：

> http://api.openweathermap.org/data/2.5/weather?appid=yourappid&cnt=0&lat=37.785834&lon=-122.406417

配合 Chrome 中的插件 [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) 使用更加方便。

#### 5. 把数据显示在 UI 上

如果只是简单的实现，可直接取 JSON 中的数值，显示在相应的 UI Label 上。这样做的好处是简单，但不利于后期的管理，拓展性也不好，如果以后需要展示更多的数据，就需要进行许多重复的赋值工作。

我先是尝试使用 ObjectMapper 自动转换 JSON 为 Object，然而在与 Alamofire 之间的衔接处理上有些疑惑，未果。最后使用的是一个结合了两者的新轮子： [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper)，不仅涵盖了网络请求，也能自动解析 JSON 到 Swift 对象。

```swift
Alamofire.request(.GET, url, parameters: ["lat":latitude, "lon":longtitude, "cnt":0, "appid": "yourappid"]).responseObject{ (response: Response<WeatherResponse, NSError>) in

        if let weatherResponse = response.result.value {

        print(weatherResponse.name)

        …

        }

     }

 }
```

#### 6. 显示更多数据及其他

在处理日出时间时，了解到 JSON 中返回的一串数字被称为 Unix Time，需要先转换为标准 UTC 时间，再转换为本地时区的 UTC 时间，时间格式转换参考了[这篇文章](http://www.jianshu.com/p/83e50e055545)。

真机调试的方法参考了这篇文章：[Xcode 7 真机调试详细步骤](http://www.jianshu.com/p/fa5f90b61ad6)

可一键生成所有尺寸 icon 的 Xcode 插件：[iconMaker](https://github.com/kaphacius/IconMaker)

项目源代码见 [Github](https://github.com/MelodieZhang/Swift-weather)。

### Takeaway

- 遇到问题，Google 是最好的老师。
- 写代码是个需要耐心的事儿，不要停止试错。
- 多折腾，会有意想不到的收获。
- 别想着把所有东西都弄懂了才开始动手。
- 能用代码实现自己设计的感觉真的很酷。
